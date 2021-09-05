<template>
  <app-main
    :movies="movies"
    :genres="genres"
    :sortName="sortName"
    :genreId="genreId"
    :page="page"
  />
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import AppMain from "~/components/AppMain.vue";
import { IGenres, INowPlayingFilms } from "~/interfaces/interfaces";
import { apiKey } from "~/utils/consts";

export default Vue.extend({
  components: { AppMain },
  watchQuery: ["page"],
  watch: {
    "$route.query"() {
      this.$nuxt.refresh();
    }
  },
  async asyncData({ $http, params, query }: any) {
    const page = query.page || 1;
    const searchVal = query.search || "";
    const movies: INowPlayingFilms = await $http.$get(
      `https://api.themoviedb.org/3${
        searchVal !== "" ? "/search" : "/discover"
      }/movie${apiKey}${
        params.genreId ? `&with_genres=${params.genreId}` : ""
      }&sort_by=${
        params.sortName ? params.sortName : ""
      }.desc&page=${page}${searchVal !== "" && `&query=${searchVal}`}`
    );
    const genres: IGenres = await $http.$get(
      `https://api.themoviedb.org/3/genre/movie/list${apiKey}`
    );
    const sortName = params.sortName;
    const genreId = params.genreId;

    return { movies, genres, sortName, genreId, page };
  }
});
</script>

<style lang="scss" scoped></style>
