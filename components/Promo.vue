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
        <div>
          <img
            src="https://image.tmdb.org/t/p/w500//lq68Z5htr1bjPd8X0U3PBZRcUij.jpg"
            alt="movie jpg"
          />
        </div>
        <div>
          <img
            src="https://image.tmdb.org/t/p/w500//ic0intvXZSfBlYPIvWXpU1ivUCO.jpg"
            alt="movie jpg"
          />
        </div>
        <div>
          <img
            src="https://image.tmdb.org/t/p/w500//lq68Z5htr1bjPd8X0U3PBZRcUij.jpg"
            alt="movie jpg"
          />
        </div>
        <div>
          <img
            src="https://image.tmdb.org/t/p/w500//ic0intvXZSfBlYPIvWXpU1ivUCO.jpg"
            alt="movie jpg"
          />
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script lang="ts">
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel }
};
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
    width: 50%;
    .slick-slide {
      img {
        width: 300px;
        height: 400px;
        margin: 0 auto;
        border-radius: 40px;
      }
    }
  }
}
</style>
