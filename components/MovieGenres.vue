<template>
  <div class="movies-genres">
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
  },
  mounted() {
    console.log(this.genreId);
  }
});
</script>

<style lang="scss" scoped>
.movies {
  &-genres {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
      &--active {
        background: #fcb124;
      }
      a {
        display: block;
        padding: 10px 40px;
        text-decoration: none;
        color: #fff;
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
