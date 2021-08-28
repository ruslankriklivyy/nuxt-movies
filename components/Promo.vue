<template>
  <section class="promo">
    <div class="promo-left">
      <h1 class="promo-left__title">
        POPCORN, PLEASE!
      </h1>
      <button class="promo-left__btn">Start Watching</button>
    </div>
    <div class="promo-right">
      <carousel
        :per-page="2"
        :navigate-to="someLocalProperty"
        :mouse-drag="true"
      >
        <slide>
          <img
            src="https://image.tmdb.org/t/p/w500//ic0intvXZSfBlYPIvWXpU1ivUCO.jpg"
            alt="movie jpg"
          />
        </slide>
        <slide>
          <img
            src="https://image.tmdb.org/t/p/w500//lq68Z5htr1bjPd8X0U3PBZRcUij.jpg"
            alt=" movie jpg"
          />
        </slide>
        <slide>
          <img
            src="https://image.tmdb.org/t/p/w500//ic0intvXZSfBlYPIvWXpU1ivUCO.jpg"
            alt="movie jpg"
          />
        </slide>
        <slide>
          <img
            src="https://image.tmdb.org/t/p/w500//lq68Z5htr1bjPd8X0U3PBZRcUij.jpg"
            alt=" movie jpg"
          />
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script lang="ts">
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    Carousel,
    Slide
  }
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
    .VueCarousel-slide {
      img {
        width: 300px;
        height: 400px;
        border-radius: 40px;
      }
    }
  }
}
</style>
