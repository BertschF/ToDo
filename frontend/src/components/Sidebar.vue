<template lang="pug">
  b-nav.wrapper(vertical='').bg-dark.w-25
    b-nav-item(active='') 
      i.pr-2.fas.fa-calendar-day
      | Heute
    b-nav-item
      i.pr-2.fas.fa-calendar-week
      | Nächste 7 Tage
    b-nav-item
      i.pr-2.fas.fa-stream
      | Alle
    hr
    span Projekte
    hr
    span Etiketten
    hr
</template>

<style scoped lang="scss">
</style>