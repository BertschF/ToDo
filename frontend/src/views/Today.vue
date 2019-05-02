<template lang="pug">
  div
    h2 Alle offenen Aufgaben
    TaskCreation
    TaskList(:tasks="tasks")

</template>

<script lang="ts">

import { Component, Vue, Watch } from 'vue-property-decorator';
import TaskList from '@/components/task_view/TaskList.vue';
import TaskCreation from '@/components/task_creation/TaskCreation.vue';

@Component({
  components: {
    TaskList,
    TaskCreation,
  },
})
export default class TodayComponent extends Vue {
    get tasks() {
      return this.$store.getters.todayTasks;
    }
}
</script>