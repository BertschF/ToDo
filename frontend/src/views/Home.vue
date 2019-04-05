<template lang="pug">
  .home
    Task(v-for="task in tasks" :key="task.id" :task="task")

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Task from '@/components/Task.vue';
import { ITask } from '@/model/task';
import { State } from '../model/state';

@Component({
  components: {
    Task,
  },
})
export default class Home extends Vue {
  get tasks(): ITask[] {
    return this.$store.getters.openTasks;
  }

  @Watch('$route')
  private onPropertyChanged(value: Route, oldValue: Route) {
    const path = value.path;
    // tslint:disable-next-line:no-console
    console.log(path);
  }
}
</script>