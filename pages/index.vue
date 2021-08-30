<template>
  <div class="container">
    <Header />
    <Promo v-if="movies.results.length > 0" :items="movies" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
import Promo from "~/components/Promo.vue";

export default Vue.extend({
  components: { Header, Promo },
  async asyncData({ $http }: any) {
    const apiKey = "?api_key=74d41124b9d3bafd09d832463dd78216";
    const movies = await $http.$get(
      `https://api.themoviedb.org/3/movie/now_playing${apiKey}`
    );
    console.log(movies);
    return { movies };
  }
});
</script>

<style lang="scss"></style>
