<template>
  <section class="promo">
    <div class="promo-left">
      <h1 class="promo-left__title">
        POPCORN, PLEASE!
      </h1>
      <nuxt-link to="/movies">
        <button class="promo-left__btn">Start Watching</button></nuxt-link
      >
    </div>
    <div class="promo-right">
      <VueSlickCarousel
        :slidesToScroll="2"
        :slidesToShow="2"
        :arrows="false"
        :autoplay="true"
        :speed="500"
        :dots="true"
      >
        <div v-for="movie in movies.results.slice(0, 4)" :key="movie.id">
          <nuxt-link :to="`/movies/${movie.id}`">
            <img
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="movie jpg"
            />
          </nuxt-link>
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import VueSlickCarousel from "vue-slick-carousel";
import { INowPlayingFilms } from "~/interfaces/interfaces";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default Vue.extend({
  components: { VueSlickCarousel },
  props: {
    movies: {
      type: Object as PropType<INowPlayingFilms>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.promo {
  display: flex;
  padding-top: 120px;

  &-left {
    width: 50%;
    &__title {
      font-weight: 700;
      line-height: 1.1;
      font-size: 106px;
      color: #fcb124;
      margin-bottom: 40px;
    }
    &__btn {
      padding: 8px 45px;
      font-size: 18px;
      font-weight: 500;
      color: #fcb124;
      border: 2px solid #fcb124;
      background: transparent;
      cursor: pointer;
      border-radius: 20px;
      transition: all 0.3s ease;
      &:hover {
        color: #1b1d1c;
        background: #fcb124;
      }
    }
  }
  &-right {
    width: 47%;
    .slick-slide {
      img {
        display: block;
        width: 300px;
        height: 400px;
        margin: 0 auto;
        border-radius: 40px;
      }
    }
  }
}
</style>
