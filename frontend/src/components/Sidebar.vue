<template lang="pug">
  b-nav.wrapper(vertical='').w-25
    b-nav-item(active='', to='today') Heute
      span.active-tasks {{ todayTasksAmount }}
    b-nav-item(to='upcoming') Nächste 7 Tage
      span.active-tasks {{ upcomingTasksAmount }}
    b-nav-item(to='all') Alle offenen
      span.active-tasks {{ openTasksAmount }}
</template>

<script lang="ts">
  import Vue from 'vue';

  export default class Sidebar extends Vue {
    get todayTasksAmount() {
      return this.$store.getters.todayTasks.length;
    }

    get upcomingTasksAmount() {
      return this.$store.getters.next7DaysTasks.length;
    }

    get openTasksAmount() {
      return this.$store.getters.openTasks.length;
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
</style>