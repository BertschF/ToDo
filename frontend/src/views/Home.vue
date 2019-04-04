<template lang="pug">
  b-button(variant="success") Let's gooo! 
</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {Route} from 'vue-router';

  @Component
  export default class Home extends Vue {

    @Watch('$route')
    private onPropertyChanged(value: Route, oldValue: Route) {
      const path = value.path;
      console.log(path);
    }
  }

</script>