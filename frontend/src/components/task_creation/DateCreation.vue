<template lang="pug">
    b-button(variant="warning") {{ date.getDate() }}.{{date.getMonth() + 1}}.{{date.getFullYear()}}
</template>


<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class DateCreationComponent extends Vue {

    @Prop()
    public date!: Date;

  }
</script>