<template lang="pug">
  .bg-dark
    nav.navbar.navbar-dark.container
      a.navbar-brand Navbar
      form.form-inline
        input.form-control.mr-sm-2(type='search', placeholder='Search', aria-label='Search')
        button.btn.btn-outline-success.my-2.my-sm-0(type='submit') Search
</template>

<style lang="scss">
  .navbar-brand {
    color: white !important; // wtf
  }
</style>