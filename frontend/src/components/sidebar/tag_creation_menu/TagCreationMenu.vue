<template lang="pug">
div
  b-button.w-100.mt-2(v-if="!newTagFormVisible" variant="secondary" @click="showNewTagForm()") Tag Hinzufügen
  .new-tag-form.mt-2(v-if="newTagFormVisible")
    input(v-model="newTagColor" type='color')
    input.mb-1(v-model.trim="newTagName" type="text" maxlength="50")
    b-button(variant="primary" @click="createNewTag()" :disabled="newTagName && newTagName.length === 0") Hinzufügen
    b-button(variant="tertiary" @click="abortNewTag()") Abbrechen
</template>


<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class TagCreationMenuComponent extends Vue {
    private newTagFormVisible: boolean = false;
    private newTagName: string = '';
    private newTagColor: string = '#e66465';

    private showNewTagForm() {
      this.newTagFormVisible = true;
    }

    private abortNewTag() {
      this.newTagFormVisible = false;
      this.newTagName = '';
    }

    private createNewTag() {
      this.newTagFormVisible = false;
      this.$store.dispatch({type: 'createTag', payload: {name: this.newTagName, color: this.newTagColor}});
      this.newTagName = '';
    }
}
</script>