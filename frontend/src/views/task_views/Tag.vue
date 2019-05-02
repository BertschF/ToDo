<template lang="pug">
  div(v-if="tag !== undefined")
    h2 {{ tag.name }}
    TaskCreation
    TaskList(:tasks="tasks")

</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator';
import TaskList from '@/components/task_view/TaskList.vue';
import TaskCreation from '@/components/task_creation/TaskCreation.vue';
import { ITask } from '../../model/task';
import { Route } from 'vue-router';
import { ITag } from '../../model/tag';

@Component({
  components: {
    TaskList,
    TaskCreation,
  },
})
export default class UpcomingComponent extends Vue {

  private tag?: ITag = {id: '0', color: '', name: ''};
  private tasks: ITask[] = [];

  private mounted() {
    this.loadTag(this.$route.params.id);
  }

  @Watch('$route')
  private onPropertyChanged(value: Route, oldValue: Route) {
    this.loadTag(value.params.id);
  }

  private loadTag(id: string) {
    this.tag = this.$store.getters.tagById(id);
    this.tasks = this.$store.getters.tasksForTag(id);
  }
}
</script>