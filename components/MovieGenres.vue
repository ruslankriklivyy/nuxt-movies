<template>
  <div class="movies-genres">
    <button
      :class="
        `${
          genreId !== undefined
            ? 'movies-genres__item'
            : 'movies-genres__item movies-genres__item--active'
        }`
      "
    >
      <nuxt-link to="/movies">
        All
      </nuxt-link>
    </button>
    <button
      v-for="genre in genres.genres"
      :key="genre.id"
      :class="
        `${
          +genreId !== genre.id
            ? 'movies-genres__item'
            : 'movies-genres__item movies-genres__item--active'
        }`
      "
    >
      <nuxt-link
        :to="`/sortby/${!sortName ? 'popularity' : sortName}/${genre.id}`"
      >
        {{ genre.name }}
      </nuxt-link>
    </button>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { IGenres } from "~/interfaces/interfaces";

export default Vue.extend({
  props: {
    genres: {
      type: Object as PropType<IGenres>,
      required: true
    },
    sortName: {
      type: String
    },
    genreId: {
      type: String
    }
  }
});
</script>

<style lang="scss" scoped>
.movies {
  &-genres {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 778px) {
      justify-content: center;
    }
    &__item {
      margin-bottom: 15px;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
      border: none;
      background: #171717;
      cursor: pointer;
      border-radius: 25px;
      margin-right: 15px;
      transition: all 0.3s ease;
      @media (max-width: 565px) {
        font-size: 14px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
      &--active {
        background: #fcb124;
      }
      a {
        display: block;
        padding: 10px 40px;
        text-decoration: none;
        color: #fff;
        @media (max-width: 565px) {
          padding: 8px 20px;
        }
      }
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background: #fcb124;
      }
    }
  }
}
</style>
