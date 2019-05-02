<template lang="pug">
  #app
    Header()
    .d-flex.container.mt-2
      Sidebar()
      .bg-light.w-100
        router-view
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Header from './components/Header.vue';
  import Sidebar from './components/sidebar/Sidebar.vue';

  @Component({
    components: {
      Sidebar,
      Header,
    },
  })
  export default class App extends Vue {
  }
</script>

