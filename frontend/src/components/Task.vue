<template lang="pug">
  .task
    input(type='checkbox' @click="toggleFinished()" :checked="task.finished === finished")
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

  public finished = State.Finished;

  private toggleFinished() {
    this.$set(this.task, 'finished', State.Finished);
    // api call with this.task.id
  }
}
</script>

<style lang="scss">
.task p {
  display: inline-block;
}
</style>