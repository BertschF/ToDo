<template lang="pug">
  div
    Task(v-for="task in tasks" :key="task.id" :task="task")
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITask } from '../model/task';
import Task from '@/components/Task.vue';

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