<template lang="pug">
div
  b-button.w-100.mt-2(v-if="!newProjectFormVisible" variant="secondary" @click="showNewProjectForm()") Projekt Hinzufügen
  .new-project-form.mt-2(v-if="newProjectFormVisible")
    input(v-model="newProjectColor" type='color')
    input.mb-1(v-model.trim="newProjectName" type="text" maxlength="50")
    b-button(variant="primary" @click="createNewProject()" :disabled="newProjectName && newProjectName.length === 0") Hinzufügen
    b-button(variant="tertiary" @click="abortNewProject()") Abbrechen
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ProjectCreationMenuComponent extends Vue {
    private newProjectFormVisible: boolean = false;
    private newProjectName: string = '';
    private newProjectColor: string = '#e66465';

    private showNewProjectForm() {
      this.newProjectFormVisible = true;
    }

    private abortNewProject() {
      this.newProjectFormVisible = false;
      this.newProjectName = '';
    }

    private createNewProject() {
      this.newProjectFormVisible = false;
      this.$store.dispatch({type: 'createProject', payload: {name: this.newProjectName, color: this.newProjectColor}});
      this.newProjectName = '';
    }
}
</script>