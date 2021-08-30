<template>
  <div class="container">
    <div class="movies">
      <div class="movies-head">
        <nuxt-link to="/">
          <h2 class="movies-head__title">Watch <span>Movies!</span></h2>
        </nuxt-link>
        <div class="movies-head__search">
          <input type="text" placeholder="Search movie by name..." />
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512.005 512.005"
            style="enable-background:new 0 0 512.005 512.005;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  fill="#FCB124"
                  d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="movies-content">
        <movie-genres :genres="genres" />
        <div class="movies-sort">
          <h4 class="movies-sort__name">Sort by:</h4>
          <button class="movies-sort__item">
            Latest
          </button>
          <button class="movies-sort__item">
            Popular
          </button>
        </div>
        <movie-lists :movies="movies" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MovieGenres from "~/components/MovieGenres.vue";
import MovieLists from "~/components/MovieLists.vue";
import { apiKey } from "~/utils/consts";

export default {
  components: { MovieGenres, MovieLists },
  async asyncData({ $http }: any) {
    const movies = await $http.$get(
      `https://api.themoviedb.org/3/movie/now_playing${apiKey}`
    );
    const genres = await $http.$get(
      `https://api.themoviedb.org/3/genre/movie/list${apiKey}`
    );
    return { movies, genres };
  }
};
</script>

<style lang="scss" scoped>
.movies {
  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
    &__title {
      font-weight: 700;
      font-size: 74px;
      margin: 0;
      color: #fcb124;
      text-transform: uppercase;
      span {
        color: #ff3b56;
      }
    }
    &__search {
      position: relative;
      width: 350px;
      height: 45px;
      input {
        width: 100%;
        height: 100%;
        background: #111111;
        border-radius: 25px;
        border: 2px solid transparent;
        outline: 0px;
        padding: 5px 20px;
        font-weight: 500;
        font-size: 18px;
        color: #fff;
        transition: all 0.3s ease;
        &:focus {
          border-color: #fcb124;
        }
        &::placeholder {
          font-weight: 500;
        }
      }
      svg {
        position: absolute;
        top: 50%;
        right: 20px;
        width: 20px;
        height: 20px;
        transform: translateY(-50%);
      }
    }
  }
  &-content {
    margin-top: 40px;
  }

  &-sort {
    margin-top: 60px;
    display: flex;
    &__name {
      font-size: 25px;
      margin: 0;
      color: #555e68;
      margin-right: 10px;
    }
    &__item {
      padding: 6px 25px;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      border: none;
      background: #171717;
      cursor: pointer;
      border-radius: 25px;
      margin-left: 10px;
      transition: all 0.3s ease;
      &:hover {
        background: #ff3b56;
      }
    }
  }
}
</style>
