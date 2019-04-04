<template lang="pug">
  .home
    Task(:task="getTask()")
    Task(:task="getTask()")
    Task(:task="getTask()")

</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {Route} from 'vue-router';
  import Task from '@/components/Task.vue';
  import {ITask} from '@/model/task';

  @Component({
    components: {
      Task,
    },
  })
  export default class Home extends Vue {

    public getTask(): ITask {
      return {
        id: '1',
        finished: true,
        description: 'Lala',
      };
    }

    @Watch('$route')
    private onPropertyChanged(value: Route, oldValue: Route) {
      const path = value.path;
      console.log(path);
    }

  }

</script>