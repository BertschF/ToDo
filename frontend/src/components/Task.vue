<template lang="pug">
  .task.ml-4.mb-2(:class="{ finished: checked }")
    b-form-checkbox.d-inline-block(@click="toggleFinished()" v-model="checked")
    span(v-text="task.description" )
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITask } from '@/model/task';
import { State } from '@/model/state';
import { parseTaskString } from '@/services/task-creator';

@Component
export default class TaskComponent extends Vue {
  @Prop()
  public task!: ITask;

  get checked() {
    return this.task.state === State.Finished;
  }

  set checked(value: boolean) {
    console.log(parseTaskString('Morgen an Bizep-Curls erinnern #Health @Training @Bizeps Voll wichtig :P'));
    const oldState = value ? State.Open : State.Finished;
    const nextState = oldState === State.Finished ? State.Open : State.Finished;

    this.$store.dispatch({type: 'changeTaskState', payload: {taskId: this.task.id, state: nextState}});
  }
}
</script>

<style lang="scss">
  .finished {
    text-decoration: line-through;
    color: #666666;
  }
</style>