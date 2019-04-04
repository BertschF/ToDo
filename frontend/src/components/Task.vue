<template lang="pug">
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ITask } from "@/model/task";

@Component
export default class TaskComponent extends Vue {
  @Prop({ type: Object as () => ITask })
  public task!: ITask;
}
</script>