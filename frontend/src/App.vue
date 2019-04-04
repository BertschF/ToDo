<template lang="pug">
  #app
    Header()
    .d-flex.container
      Sidebar()
      router-view
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Header from '@/components/Header.vue';
  import Sidebar from '@/components/Sidebar.vue';

  @Component({
    components: {
      Sidebar,
      Header,
    },
  })
  export default class App extends Vue {
  }
</script>

