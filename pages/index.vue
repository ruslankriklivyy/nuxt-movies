<template>
  <div class="container">
    <Header />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: "Noto Sans JP", sans-serif;
}
html,
body {
  margin: 0;
  padding: 0;
}
body {
  background-color: #1b1d1c;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.container {
  max-width: 1430px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
