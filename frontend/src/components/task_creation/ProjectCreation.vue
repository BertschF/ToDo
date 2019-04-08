<template lang="pug">
    b-button(variant="primary") # {{ project.name }}
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { IProject } from '../../model/project';

@Component
export default class ProjectCreationComponent extends Vue {
  @Prop()
  public project!: IProject;
}
</script>