<template lang="pug">
  div
    Task(v-for="task in tasks" :key="task.id" :task="task")
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import Task from '@/components/task_view/Task.vue';
import { ITask } from '@/model/task';

@Component({
    components: {
        Task,
    },
})
export default class TagCreationComponent extends Vue {
  @Prop()
  public tasks!: ITask[];
}
</script>