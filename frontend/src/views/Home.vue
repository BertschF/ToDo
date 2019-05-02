<template lang="pug">
  .home
    TaskCreation
    TaskList(:tasks="tasks")

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import TaskList from '@/components/TaskList.vue';
import TaskCreation from '@/components/task_creation/TaskCreation.vue';
import { ITask } from '@/model/task';

@Component({
  components: {
    TaskList,
    TaskCreation,
  },
})
export default class Home extends Vue {

  private tasks: ITask[] = [];

  private mounted() {
    this.tasks = this.loadTasks(this.$route);
  }

  @Watch('$route')
  private onPropertyChanged(value: Route, oldValue: Route) {
    this.tasks = this.loadTasks(value);
  }

  private loadTasks(route: Route): ITask[] {
    const path = route.path;
    switch (path) {
      case '/': {
        return this.$store.getters.todayTasks;
      }
      case '/today': {
        return this.$store.getters.todayTasks;
      }
      case '/all': {
        return this.$store.getters.overDueTasks.concat(this.$store.getters.openTasks);
      }
      case '/upcoming': {
        return this.$store.getters.next7DaysTasks;
      }
      default: {
        return [];
      }
    }
  }
}
</script>