<template>
  <div class="container">
    <div class="movies">
      <div class="movies-head">
        <nuxt-link to="/">
          <h2 class="movies-head__title">Watch <span>Movies!</span></h2>
        </nuxt-link>
        <div class="movies-head__search">
          <input
            type="text"
            placeholder="Search movie by name..."
            v-debounce:1s="getSearchVal"
          />
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
        <movie-genres
          :genres="genres"
          :sortName="sortName"
          :genreId="genreId"
        />
        <div class="movies-sort">
          <h4 class="movies-sort__name">Sort by:</h4>
          <button
            :class="
              `${
                sortName !== item.title
                  ? 'movies-sort__item'
                  : 'movies-sort__item movies-sort__item--active'
              }`
            "
            v-for="item in sortByType"
            :key="item.id"
          >
            <nuxt-link
              :to="`/sortby/${item.title}/${genreId ? genreId : '28'}`"
            >
              {{ item.name }}
            </nuxt-link>
          </button>
        </div>
        <movie-lists
          :movies="movies"
          :sortName="sortName"
          :genreId="genreId"
          v-bind:page.sync="page"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { debounce } from "vue-debounce";

import { INowPlayingFilms, IGenres } from "~/interfaces/interfaces";

export default Vue.extend({
  props: {
    movies: {
      type: Object as PropType<INowPlayingFilms>
    },
    genres: {
      type: Object as PropType<IGenres>
    },
    sortName: {
      type: String
    },
    genreId: {
      type: String
    },
    page: {
      type: String || Number
    }
  },
  data() {
    return {
      searchVal: "",
      sortByType: [
        { id: 1, name: "Default", title: "popularity" },
        { id: 2, name: "Rating", title: "vote_average" },
        { id: 3, name: "A-Z", title: "title" },
        { id: 4, name: "Release date", title: "release_date" }
      ]
    };
  },
  methods: {
    getSearchVal(value) {
      if (value !== "") {
        return this.$router.push({ query: { search: value } });
      }

      return this.$router.push({});
    }
  }
});
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
      font-size: 18px;
      font-weight: 600;
      border: none;
      background: #171717;
      cursor: pointer;
      border-radius: 25px;
      margin-left: 10px;
      transition: all 0.3s ease;
      &--active {
        background: #ff3b56;
      }
      a {
        padding: 6px 25px;
        color: #fff;
        text-decoration: none;
      }
      &:hover {
        background: #ff3b56;
      }
    }
  }
}
</style>
