<template>
  <div class="container">
    <h2 class="movie-name">
      {{ movie.title }}
    </h2>
    <div class="movie">
      <div class="movie-left">
        <img
          class="movie-left__poster"
          :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
          alt="movie jpg"
        />
        <my-button>Watch Trailer</my-button>
      </div>
      <div class="movie-right">
        <div class="movie-right__info">
          <div class="movie-right__info-type">
            Vote Average:
          </div>
          <div class="movie-right__info-box movie-right__info-box--rating">
            {{ movie.vote_average }}
          </div>
        </div>
        <div class="movie-right__info">
          <div class="movie-right__info-type">
            Vote Count:
          </div>
          <div class="movie-right__info-box">
            {{ movie.vote_count }}
          </div>
        </div>
        <div class="movie-right__info">
          <div class="movie-right__info-type">
            Year:
          </div>
          <div class="movie-right__info-box">
            {{ movie.release_date }}
          </div>
        </div>
        <div class="movie-right__info">
          <div class="movie-right__info-type">
            Tagline:
          </div>
          <div class="movie-right__info-box">
            {{ movie.tagline }}
          </div>
        </div>
        <div class="movie-right__info">
          <div class="movie-right__info-type">
            Budget:
          </div>
          <div class="movie-right__info-box">{{ movie.budget }}$</div>
        </div>
        <div class="movie-right__info">
          <div class="movie-right__info-type">
            Genre:
          </div>
          <div class="movie-right__info-box movie-right__info-box--genres">
            <div
              v-for="item in movie.genres"
              :key="item.id"
              class="movie-right__info-box--genres-item"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import MyButton from "~/components/MyButton.vue";
import numberConvert from "~/utils/convertNumber";

export default defineComponent({
  name: "Movie Page",
  components: { MyButton },
  setup() {},
  data() {
    return {
      voteCount: this.movie.vote_count
    };
  },
  computed: {
    getVoteCount: (voteCount: number) => {
      return numberConvert(voteCount);
    }
  },
  async asyncData({ $http, params }: any) {
    const apiKey = "?api_key=74d41124b9d3bafd09d832463dd78216";
    const movie = await $http.$get(
      `https://api.themoviedb.org/3/movie/${params.id}${apiKey}`
    );
    console.log(movie);
    return { movie };
  }
});
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  align-items: center;
  &-name {
    font-weight: 700;
    font-size: 70px;
    color: #d3d3d3;
  }
  &-left {
    &__poster {
      display: block;
      width: 340px;
      height: 480px;
      border-radius: 40px;
      margin-bottom: 30px;
    }
    .btn {
      padding: 10px 40px;
    }
  }
  &-right {
    margin-left: 150px;
    &__info {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      &-type {
        color: #d3d3d3;
        font-size: 22px;
        margin-right: 5px;
      }
      &-box {
        font-size: 25px;
        color: #f13b56;
        &--rating {
          color: #fbb023;
        }
        &--genres {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          &-item {
            position: relative;
            margin-right: 15px;
            &:last-child {
              margin-right: 0;
              &::after {
                display: none;
              }
            }
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 6px;
              right: -8px;
              width: 2px;
              height: 30px;
              background: #fbb023;
              transform: rotate(10deg);
              border-radius: 2px;
            }
          }
        }
      }
    }
  }
}
</style>
