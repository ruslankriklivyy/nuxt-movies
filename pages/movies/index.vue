<template>
  <app-main
    :movies="movies"
    :genres="genres"
    :sortName="sortName"
    :page="page"
  />
</template>

<script lang="ts">
import Vue from "vue";
import AppMain from "~/components/AppMain.vue";
import { IGenres, INowPlayingFilms } from "~/interfaces/interfaces";
import { apiKey } from "~/utils/consts";

export default Vue.extend({
  components: { AppMain },
  async asyncData({ $http, params }: any) {
    const page = params.page || 1;
    const movies: INowPlayingFilms = await $http.$get(
      `https://api.themoviedb.org/3/movie/now_playing${apiKey}&page=${page}`
    );
    const genres: IGenres = await $http.$get(
      `https://api.themoviedb.org/3/genre/movie/list${apiKey}`
    );
    const sortName = params.sortName;
    console.log(params);
    return { movies, genres, sortName, page };
  }
});
</script>

<style lang="scss" scoped></style>
