<template lang="pug">
  .home
    Task(v-for="task in tasks" :key="task.id" :task="task")

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';
import Task from '@/components/Task.vue';
import { ITask } from '@/model/task';

@Component({
  components: {
    Task,
  },
})
export default class Home extends Vue {

  private tasks: ITask[] = this.$store.getters.todayTasks;

  @Watch('$route')
  private onPropertyChanged(value: Route, oldValue: Route) {
    const path = value.path;

    switch (path) {
      case '/': {
        this.tasks = this.$store.getters.todayTasks;
        break;
      }
      case '/today': {
        this.tasks = this.$store.getters.todayTasks;
        break;
      }
      case '/all': {
        this.tasks = this.$store.getters.overDueTasks.concat(this.$store.getters.openTasks);
        break;
      }
      case '/upcoming': {
        this.tasks = this.$store.getters.next7DaysTasks;
        break;
      }

    }
  }
}
</script>