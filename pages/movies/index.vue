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
  watchQuery: ["page", "search"],
  watch: {
    "$route.query"() {
      this.$nuxt.refresh();
    }
  },
  async asyncData({ $http, params, query }: any) {
    const page = query.page || 1;
    const searchVal = query.search || "";
    console.log(page);
    const movies: INowPlayingFilms = await $http.$get(
      `https://api.themoviedb.org/3${searchVal !== "" ? "/search" : ""}/movie${
        searchVal !== "" ? "" : `/now_playing`
      }${apiKey}&page=${page}${searchVal !== "" ? `&query=${searchVal}` : ""}`
    );
    const genres: IGenres = await $http.$get(
      `https://api.themoviedb.org/3/genre/movie/list${apiKey}`
    );
    const sortName = params.sortName;
    return { movies, genres, sortName, page };
  }
});
</script>

<style lang="scss" scoped></style>
