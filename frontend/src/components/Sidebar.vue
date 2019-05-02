<template lang="pug">
  .sidebar.w-25
    b-nav.wrapper(vertical='')
      b-nav-item(active='', to='/today') Heute
        span.active-tasks {{ todayTasksAmount }}
      b-nav-item(to='/upcoming') Nächste 7 Tage
        span.active-tasks {{ upcomingTasksAmount }}
      b-nav-item(to='/all') Alle offenen
        span.active-tasks {{ openTasksAmount }}

    .line
    b-nav.wrapper(vertical='')
      p.project-list-title.mb-2 Projekte
      p.center(v-if="projects === undefined || projects.length === 0" to='projects') Noch gibt es kein Projekt.
      .project-wrapper(v-else)
        b-nav-item(v-for="project in projects" :key="project.id" :to="{name: 'project', params: {id: project.id}}") {{ project.name }}
          span.active-tasks {{ getTasksForProject(project.id).length }}
    
    ProjectCreationMenu()

</template>

<script lang="ts">
  import Vue from 'vue';
  import {IProject} from '@/model/project';
  import {ITask} from '@/model/task';
  import Component from 'vue-class-component';
  import ProjectCreationMenu from '@/components/project_creation_menu/ProjectCreationMenu.vue';

  @Component({
    components: {
      ProjectCreationMenu,
    },
  })
  export default class Sidebar extends Vue {
    get todayTasksAmount(): ITask[] {
      return this.$store.getters.todayTasks.length;
    }

    get upcomingTasksAmount(): ITask[] {
      return this.$store.getters.next7DaysTasks.length;
    }

    get openTasksAmount(): ITask[] {
      return this.$store.getters.openTasks.length;
    }

    get projects(): IProject[] {
      return this.$store.state.projects;
    }

    private getTasksForProject(id: string): ITask[] {
      return this.$store.getters.tasksForProject(id);
    }
  }
</script>

<style scoped lang="scss">
  .nav-link {
    color: green;
    border-radius: 2px;
    transition: all 0.2s;
  }

  .router-link-active {
    background-color: green;
    color: white;
  }
  
  .active-tasks {
    float: right;
  }

  .line {
    margin: 12px 36px;
    border: 1px solid #a5a5a5;
  }

  .project-list-title {
    text-align: center;
  }
  
  .center {
    text-align: center;
  }
</style>