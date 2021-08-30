<template>
  <app-main
    :movies="movies"
    :genres="genres"
    :sortName="sortName"
    :genreId="genreId"
  />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import AppMain from "~/components/AppMain.vue";
import { IGenres, INowPlayingFilms } from "~/interfaces/interfaces";
import { apiKey } from "~/utils/consts";

export default Vue.extend({
  components: { AppMain },
  async asyncData({ $http, params }: any) {
    const movies: INowPlayingFilms = await $http.$get(
      `https://api.themoviedb.org/3/discover/movie${apiKey}${
        params.genreId ? `&with_genres=${params.genreId}` : ""
      }&sort_by=${params.sortName ? params.sortName : ""}`
    );
    const genres: IGenres = await $http.$get(
      `https://api.themoviedb.org/3/genre/movie/list${apiKey}`
    );
    const sortName = params.sortName;
    const genreId = params.genreId;
    console.log(params);
    return { movies, genres, sortName, genreId };
  }
});
</script>

<style lang="scss" scoped></style>
