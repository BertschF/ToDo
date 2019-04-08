<template lang="pug">
    b-button(variant="secondary") @ {{ tag.name }}
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITask } from '@/model/task';
import { State } from '@/model/state';
import { parseTaskString } from '@/services/task-creator';
import { ITag } from '../../model/tag';

@Component
export default class TagCreationComponent extends Vue {
  @Prop()
  public tag!: ITag;
}
</script>