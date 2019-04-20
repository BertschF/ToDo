<template lang="pug">
  span
    form.input
      input.d-block.mb-2.w-75(type="text" required="true" v-model="todoText" @keyup="keyupEvent()")
      b-button(variant="primary" @click="createTodo()" :disabled="todoText.length === 0") Aufgabe hinzufügen
    br
    div(v-model="todoText" @keyup="keyupEvent()" contenteditable="true")
      span(v-if="creation.length !== 0" v-for="text in creation")
        span(v-if="text.type === creationType.Text") {{text.text}}
        DateCreation(v-if="text.type === creationType.Date" :date="text.date")
        TagCreation(v-if="text.type === creationType.Tag" :tag="text.tag")
        ProjectCreation(v-if="text.type === creationType.Project" :project="text.project")
      span(v-else)

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {CreationText, CreationType, ICreation, parseTaskString} from '@/services/task-creator';
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

    private todoText: string = '';

    private creation: ICreation[] = [];

    private createTodo() {
      let taskDescription = '';
      this.creation.forEach((value) => {
        if (value.type === CreationType.Text) {
          taskDescription += (value as CreationText).text;
        }
      });

      const task: ITask = {
        id: 'aldladls' + Date.now(),
        description: taskDescription,
        dueDate: new Date(),
        state: State.Open,
      };

      this.$store.dispatch({type: 'createTask', payload: task});
    }

    private keyupEvent() {
      this.creation = parseTaskString(this.todoText);
      // parseTaskString('Morgen an Bizep-Curls erinnern #Health @Training @Bizeps Voll wichtig :P');
    }
  }
</script>
