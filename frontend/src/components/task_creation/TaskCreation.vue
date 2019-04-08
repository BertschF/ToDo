<template lang="pug">
span
    span(v-for="text in creation")
      span(v-if="text.type === creationType.Text") {{text.text}}
      DateCreation(v-if="text.type === creationType.Date" :date="text.date")
      TagCreation(v-if="text.type === creationType.Tag" :tag="text.tag")
      ProjectCreation(v-if="text.type === creationType.Project" :project="text.project")

</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { parseTaskString, CreationType } from '@/services/task-creator';
import TagCreation from '@/components/task_creation/TagCreation.vue';
import ProjectCreation from '@/components/task_creation/ProjectCreation.vue';
import DateCreation from '@/components/task_creation/DateCreation.vue';

@Component({
  components: {
    TagCreation,
    ProjectCreation,
    DateCreation,
  },
})
export default class TaskCreationComponent extends Vue {
  public readonly creationType = CreationType;

  get creation() {
    const result = parseTaskString('Morgen an Bizep-Curls erinnern #Health @Training @Bizeps Voll wichtig :P');
    return result;
  }
}
</script>
