<template>
  <div class="movies-genres">
    <button
      v-for="genre in genres.genres"
      :key="genre.id"
      class="movies-genres__item"
    >
      {{ genre.name }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    genres: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.movies {
  &-genres {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &__item {
      padding: 10px 40px;
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
