<template lang="pug">
  b-nav.wrapper(vertical='').w-25
    b-nav-item(active='', to='today') Heute
    b-nav-item(to='upcoming') Nächste 7 Tage
    b-nav-item(to='all') Alle
</template>
q
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
</style>