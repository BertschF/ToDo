<template lang="pug">
  div(v-if="project !== undefined")
    h2 {{ project.name }}
    TaskCreation
    TaskList(:tasks="tasks")

</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator';
import TaskList from '@/components/task_view/TaskList.vue';
import TaskCreation from '@/components/task_creation/TaskCreation.vue';
import { ITask } from '../../model/task';
import { Route } from 'vue-router';
import { IProject } from '../../model/project';

@Component({
  components: {
    TaskList,
    TaskCreation,
  },
})
export default class UpcomingComponent extends Vue {

  private project?: IProject = {id: '0', color: '', name: ''};
  private tasks: ITask[] = [];

  private mounted() {
    this.loadProject(this.$route.params.id);
  }

  @Watch('$route')
  private onPropertyChanged(value: Route, oldValue: Route) {
    this.loadProject(value.params.id);
  }

  private loadProject(id: string) {
    this.project = this.$store.getters.projectById(id);
    this.tasks = this.$store.getters.tasksForProject(id);
  }
}
</script>