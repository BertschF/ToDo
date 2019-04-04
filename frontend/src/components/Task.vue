<template lang="pug">
  .task
    input(type='checkbox' @click="toggleFinished()" :checked="task.finished")
    p(v-text="task.description")

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import {ITask} from '@/model/task';

  @Component
  export default class TaskComponent extends Vue {

    @Prop()
    public task!: ITask;

    private toggleFinished() {
      this.$set(this.task, 'finished', !this.task.finished);
      // api call with this.task.id
    }

  }

</script>

<style lang="scss">
  .task p {
    display: inline-block;
  }
</style>