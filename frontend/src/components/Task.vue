<template lang="pug">
  .task
    input(type='checkbox' @click="toggleFinished()" :checked="checked")
    p(v-text="task.description")

</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITask } from '@/model/task';
import { State } from '../model/state';

@Component
export default class TaskComponent extends Vue {
  @Prop()
  public task!: ITask;

  get checked() {
    return this.task.state === State.Finished;
  }

  private toggleFinished() {
    const nextState = this.task.state === State.Finished ? State.Open : State.Finished;
    this.$store.dispatch({type: 'changeTaskState', payload: {id: this.task.id, state: nextState}});
  }
}
</script>

<style lang="scss">
.task p {
  display: inline-block;
}
</style>