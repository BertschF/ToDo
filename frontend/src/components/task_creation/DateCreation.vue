<template lang="pug">
    b-button(variant="warning") {{ date.getDate() }} {{date.getMonth()}} {{date.getYear()}}
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { ITask } from '@/model/task';
import { State } from '@/model/state';
import { parseTaskString } from '@/services/task-creator';
import { ITag } from '../../model/tag';

@Component
export default class DateCreationComponent extends Vue {
  @Prop()
  public date!: Date;
}
</script>