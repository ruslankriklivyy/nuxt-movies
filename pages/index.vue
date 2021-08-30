<template>
  <div class="container">
    <Header />
    <Promo :movies="movies" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";
import Promo from "~/components/Promo.vue";
import { INowPlayingFilms } from "~/interfaces/interfaces";
import { apiKey } from "~/utils/consts";

export default Vue.extend({
  components: { Header, Promo },
  async asyncData({ $http }: any) {
    const movies: INowPlayingFilms = await $http.$get(
      `https://api.themoviedb.org/3/movie/now_playing${apiKey}`
    );
    return { movies };
  }
});
</script>

<style lang="scss"></style>
