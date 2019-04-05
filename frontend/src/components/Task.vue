<template lang="pug">
  .task.d-inline
    input(type='checkbox' @click="toggleFinished()" :checked="checked")
    span(v-text="task.description")

</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITask } from '@/model/task';
import { State } from '../model/state';
import { parseTaskString } from '@/services/task-creator';

@Component
export default class TaskComponent extends Vue {
  @Prop()
  public task!: ITask;

  get checked() {
    return this.task.state === State.Finished;
  }

  private toggleFinished() {
    console.log(parseTaskString('Morgen an Bizep-Curls erinnern #Health @Training @Bizeps Voll wichtig :P'));
    const nextState = this.task.state === State.Finished ? State.Open : State.Finished;
    this.$store.dispatch({type: 'changeTaskState', payload: {id: this.task.id, state: nextState}});
  }
}
</script>