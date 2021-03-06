<template>
  <div>
    <my-modal v-bind:showModal.sync="isShowModal" v-if="isShowModal">
      <iframe
        data-frameborder="0"
        data-allowfullscreen
        title="trailer"
        width="468"
        height="460"
        :src="
          `https://www.youtube.com/embed/${movieTrailer.results[0].key}?showinfo=0`
        "
      ></iframe>
    </my-modal>
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
          <my-button v-bind:showModal.sync="isShowModal"
            >Watch Trailer</my-button
          >
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
              {{ getCorrectNumber(movie.vote_count) }}
            </div>
          </div>
          <div class="movie-right__info">
            <div class="movie-right__info-type">
              Year:
            </div>
            <div class="movie-right__info-box">
              {{ movie.release_date.slice(0, 4) }}
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
            <div class="movie-right__info-box">
              {{ getCorrectNumber(movie.budget) }}$
            </div>
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
          <div class="movie-right__info">
            <div class="movie-right__info-type">
              Cast:
            </div>
            <div class="movie-right__info-box movie-right__info-box--cast">
              <div
                v-for="item in movieCredits.cast.slice(0, 5)"
                :key="item.id"
                class="movie-right__info-box--cast-item"
              >
                <img
                  :src="`https://image.tmdb.org/t/p/w200//${item.profile_path}`"
                  alt="cast img"
                />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MyButton from "~/components/MyButton.vue";
import MyModal from "~/components/MyModal.vue";
import numberConvert from "~/utils/convertNumber";
import { IMovieDetails, ICredits, ITrailerById } from "~/interfaces/interfaces";
import { apiKey } from "~/utils/consts";

export default Vue.extend({
  components: { MyButton, MyModal },
  data() {
    return {
      isShowModal: false
    };
  },
  methods: {
    getCorrectNumber(num: number): string {
      return numberConvert(num);
    },
    setIsShowModal(visible: boolean) {
      this.isShowModal = visible;
    }
  },
  async asyncData({ $http, params }: any) {
    const movie: IMovieDetails = await $http.$get(
      `https://api.themoviedb.org/3/movie/${params.id}${apiKey}`
    );
    const movieCredits: ICredits = await $http.$get(
      `https://api.themoviedb.org/3/movie/${params.id}/credits${apiKey}`
    );
    const movieTrailer: ITrailerById = await $http.$get(
      `https://api.themoviedb.org/3/movie/${params.id}/videos${apiKey}`
    );

    return { movie, movieCredits, movieTrailer };
  }
});
</script>

<style lang="scss" scoped>
.movie {
  display: flex;
  align-items: center;
  @media (max-width: 778px) {
    flex-direction: column;
    justify-content: center;
    button {
      margin: 0 auto 20px auto;
      display: block;
    }
  }
  &-name {
    font-weight: 700;
    font-size: 70px;
    color: #d3d3d3;
    margin-bottom: 20px;
    @media (max-width: 778px) {
      font-size: 56px;
      text-align: center;
    }
    @media (max-width: 565px) {
      font-size: 48px;
    }
  }
  &-left {
    &__poster {
      display: block;
      width: 340px;
      height: 480px;
      border-radius: 40px;
      margin-bottom: 30px;
      @media (max-width: 565px) {
        width: 300px;
        height: 420px;
      }
    }
    .btn {
      padding: 10px 40px;
    }
  }
  &-right {
    margin-left: 150px;
    @media (max-width: 992px) {
      margin-left: 50px;
    }
    @media (max-width: 778px) {
      margin-left: 0;
    }
    &__info {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      @media (max-width: 778px) {
        justify-content: center;
      }
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
        &--cast {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-left: 10px;
          &-item {
            text-align: center;
            width: 100px;
            img {
              display: block;
              width: 70px;
              height: 90px;
              border-radius: 10px;
              margin: 0 auto;
            }
            span {
              display: block;
              margin-top: 5px;
              font-size: 12px;
            }
          }
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
