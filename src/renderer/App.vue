<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'picturesque',
  };
</script>

<style lang="scss">
  /* CSS */
  body {
    margin: 0;
    padding: 0
  }
  .row {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    width: 100%;
  }
  .col {
    display: grid !important
  }
  @for $i from 1 through 12 {
    .col-#{$i} {
      grid-column: span $i
    }
  }
</style>
