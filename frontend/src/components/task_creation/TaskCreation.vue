<template lang="pug">
  span
    div.task-input-field.mb-1(@input="onInput" contenteditable="true" ref="taskInputField")
      span.special-frields(v-for="text in creation")
        //span(v-if="text.type === creationType.Text") {{text.text}}
        DateCreation(v-if="text.type === creationType.Date" :date="text.date")
        TagCreation(v-else-if="text.type === creationType.Tag" :tag="text.tag")
        ProjectCreation(v-else-if="text.type === creationType.Project" :project="text.project")
    b-button(variant="primary" @click="createTodo()" :disabled="creation.length === 0") Aufgabe hinzufügen

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {
    CreationDate,
    CreationProject,
    CreationTag,
    CreationType,
    ICreation,
    parseTaskString,
  } from '@/services/task-creator';
  import TagCreation from '@/components/task_creation/TagCreation.vue';
  import ProjectCreation from '@/components/task_creation/ProjectCreation.vue';
  import DateCreation from '@/components/task_creation/DateCreation.vue';
  import {ITask} from '@/model/task';
  import {State} from '@/model/state';

  @Component({
    components: {
      TagCreation,
      ProjectCreation,
      DateCreation,
    },
  })
  export default class TaskCreationComponent extends Vue {
    public readonly creationType = CreationType;

    private creation: ICreation[] = [];

    private todoText = '';

    private onInput(e: any) {
      const text = e.target.innerText;
      this.todoText = text;
      this.creation = parseTaskString(text);
    }

    private createTodo() {
      const tags: string[] = [];
      let project;
      let dueDate;

      this.creation.forEach((value) => {
        if (value.type === CreationType.Tag) {
          tags.push((value as CreationTag).tag.id);
        }
        if (value.type === CreationType.Project) {
          project = (value as CreationProject).project.id;
        }
        if (value.type === CreationType.Date) {
          dueDate = (value as CreationDate).date;
        }
      });

      const task: ITask = {
        id: 'aldladls' + Date.now(),
        description: this.todoText,
        state: State.Open,
        dueDate,
        tagIds: tags,
        projectId: project,
      };

      this.$store.dispatch({type: 'createTask', payload: task});
      (this.$refs.taskInputField as HTMLDivElement).innerText = '';
    }
  }
</script>

<style scoped lang="scss">
  .task-input-field {
    background-color: white;
    border: 1px solid lightgray;
    height: 40px;
  }

  .special-frields {
    float: right;
  }
</style>