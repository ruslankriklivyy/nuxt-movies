<template>
  <div class="container">
    <div class="movies">
      <div class="movies-head">
        <h2 class="movies-head__title">Watch <span>Movies!</span></h2>
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
        <div class="movies-genres">
          <button class="movies-genres__item">
            Action
          </button>
          <button class="movies-genres__item">
            Adventure
          </button>
        </div>
        <div class="movies-sort">
          <h4 class="movies-sort__name">Sort by:</h4>
          <button class="movies-sort__item">
            Latest
          </button>
          <button class="movies-sort__item">
            Popular
          </button>
        </div>
        <div class="movies-lists">
          <div
            v-for="movie in movies.results"
            :key="movie.id"
            class="movies-lists__item"
          >
            <img
              class="movies-lists__item-poster"
              :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
              alt="movie jpg"
            />
            <h4 class="movies-lists__item-name">
              {{ movie.title }}
            </h4>
            <div class="movies-lists__item-bottom">
              <span class="movies-lists__item-date">
                {{ movie.release_date }}
              </span>
              <div class="movies-lists__item-bottom__right">
                <span class="movies-lists__item-scores">
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512.001 512.001"
                    style="enable-background:new 0 0 512.001 512.001;"
                    xml:space="preserve"
                  >
                    <path
                      style="fill:#55D4BE;"
                      d="M148.754,344.012H85.185c-11.702,0-21.19-9.487-21.19-21.19V149.194
	c0-11.702,9.487-21.19,21.19-21.19h63.57c11.702,0,21.19,9.487,21.19,21.19v173.628
	C169.944,334.524,160.457,344.012,148.754,344.012z"
                    />
                    <path
                      style="fill:#24BFB2;"
                      d="M85.185,312.226V128.004c-11.702,0-21.19,9.487-21.19,21.19v173.628
	c0,11.702,9.487,21.19,21.19,21.19h63.57c11.702,0,21.19-9.487,21.19-21.19H95.779C89.928,322.822,85.185,318.078,85.185,312.226z"
                    />
                    <circle
                      style="fill:#F2EDEC;"
                      cx="116.965"
                      cy="296.33"
                      r="15.893"
                    />
                    <path
                      style="fill:#FCE780;"
                      d="M456.007,152.997L456.007,152.997c0-14.628-11.858-26.488-26.487-26.488H296.002
	c0,0,11.335-13.852,16.001-46.507c8-56.002-12.083-77.511-32.001-79.941c-4.956-0.605-9.314,3.291-9.314,8.284
	c0,0-5.029,52.342-14.686,71.656c-24.001,48.002-86.057,72.002-86.057,72.002v170.613c0,0,14.054,15.791,42.379,15.791
	c67.678,0,196.007,0,196.007,0c14.628,0,26.487-11.858,26.487-26.487s-11.858-26.488-26.487-26.488h10.595
	c14.628,0,26.487-11.858,26.487-26.488l0,0c0-14.628-11.858-26.487-26.487-26.487h10.595c14.628,0,26.487-11.858,26.487-26.488l0,0
	c0-14.628-11.858-26.488-26.487-26.488C444.149,179.484,456.007,167.626,456.007,152.997z"
                    />
                    <path
                      style="fill:#FEE2CA;"
                      d="M456.007,152.997L456.007,152.997c0-14.628-11.858-26.488-26.487-26.488H296.002
	c0,0,11.335-13.852,16.001-46.507c8-56.002-12.083-77.511-32.001-79.941c-4.956-0.605-9.314,3.291-9.314,8.284
	c0,0-5.029,52.342-14.686,71.656c-24.001,48.002-86.057,72.002-86.057,72.002v170.613c0,0,14.054,15.791,42.379,15.791
	c67.678,0,196.007,0,196.007,0c14.628,0,26.487-11.858,26.487-26.487s-11.858-26.488-26.487-26.488h10.595
	c14.628,0,26.487-11.858,26.487-26.488l0,0c0-14.628-11.858-26.487-26.487-26.487h10.595c14.628,0,26.487-11.858,26.487-26.488l0,0
	c0-14.628-11.858-26.488-26.487-26.488C444.149,179.484,456.007,167.626,456.007,152.997z"
                    />
                    <g>
                      <path
                        style="fill:#FDD0AB;"
                        d="M408.33,322.408c0,0-128.328,0-196.007,0c-28.325,0-42.379-15.791-42.379-15.791v16.001
		c0,0,14.054,15.791,42.379,15.791c67.678,0,196.007,0,196.007,0c14.628,0,26.487-11.858,26.487-26.487c0-2.789-0.434-5.476-1.233-8
		C430.192,314.639,420.17,322.408,408.33,322.408z"
                      />
                      <path
                        style="fill:#FDD0AB;"
                        d="M429.52,158.294h-26.487v21.19h26.487c14.628,0,26.487-11.858,26.487-26.487l0,0
		c0-3.77-0.799-7.348-2.219-10.595C449.7,151.753,440.379,158.294,429.52,158.294z"
                      />
                      <path
                        style="fill:#FDD0AB;"
                        d="M429.52,211.269h-26.487v21.19h26.487c14.628,0,26.487-11.858,26.487-26.487l0,0
		c0-3.77-0.799-7.348-2.219-10.595C449.7,204.728,440.379,211.269,429.52,211.269z"
                      />
                      <path
                        style="fill:#FDD0AB;"
                        d="M418.925,264.244h-15.893v21.19h15.893c14.628,0,26.488-11.858,26.488-26.487l0,0
		c0-3.77-0.799-7.348-2.219-10.595C439.104,257.703,429.784,264.244,418.925,264.244z"
                      />
                    </g>
                    <g>
                      <path
                        style="fill:#FA892D;"
                        d="M321.454,420.073h-44.551l-13.767-42.371c-1.004-3.091-3.884-5.183-7.133-5.183
		c-3.249,0-6.129,2.092-7.133,5.183l-13.767,42.371h-44.551c-3.249,0-6.129,2.092-7.133,5.183c-1.004,3.09,0.096,6.476,2.725,8.385
		l36.043,26.188l-13.767,42.371c-0.961,2.955,0.049,6.284,2.49,8.207c2.608,2.055,6.365,2.13,9.051,0.178l36.043-26.188
		l36.043,26.188c2.819,2.048,6.781,1.851,9.386-0.459c2.209-1.959,3.068-5.117,2.155-7.925l-13.767-42.371l36.043-26.188
		c2.629-1.909,3.729-5.295,2.725-8.385C327.582,422.164,324.703,420.073,321.454,420.073z"
                      />
                      <path
                        style="fill:#FA892D;"
                        d="M511.142,425.255c-1.004-3.091-3.884-5.183-7.133-5.183h-44.551l-13.767-42.371
		c-0.992-3.055-3.921-5.183-7.133-5.183c-3.212,0-6.14,2.127-7.133,5.183l-13.767,42.371h-44.552c-3.249,0-6.129,2.092-7.133,5.183
		c-1.004,3.09,0.096,6.476,2.725,8.385l36.043,26.188L390.971,502.2c-0.961,2.955,0.049,6.284,2.49,8.207
		c2.608,2.055,6.365,2.13,9.051,0.178l36.043-26.188l36.043,26.188c2.819,2.048,6.781,1.851,9.387-0.459
		c2.209-1.959,3.068-5.117,2.155-7.925l-13.767-42.371l36.043-26.188C511.046,431.731,512.147,428.345,511.142,425.255z"
                      />
                      <path
                        style="fill:#FA892D;"
                        d="M138.898,420.073H94.345l-13.767-42.371c-1.004-3.091-3.884-5.183-7.133-5.183
		s-6.129,2.092-7.133,5.183l-13.767,42.371H7.992c-3.249,0-6.129,2.092-7.133,5.183c-1.004,3.09,0.096,6.476,2.725,8.385
		l36.043,26.188L25.86,502.201c-0.961,2.955,0.049,6.284,2.49,8.207c2.608,2.055,6.365,2.13,9.052,0.178l36.043-26.188
		l36.043,26.188c2.819,2.048,6.781,1.851,9.386-0.459c2.209-1.959,3.068-5.117,2.155-7.925l-13.767-42.371l36.043-26.188
		c2.629-1.909,3.729-5.295,2.725-8.385C145.027,422.164,142.147,420.073,138.898,420.073z"
                      />
                    </g>
                  </svg>
                  {{ movie.vote_count }}
                </span>
                <span class="movies-lists__item-rating">
                  <svg
                    height="511pt"
                    viewBox="0 -10 511.98685 511"
                    width="511pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"
                      fill="#ffc107"
                    />
                  </svg>
                  {{ movie.vote_average }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  async asyncData({ $http }: any) {
    const apiKey = "?api_key=74d41124b9d3bafd09d832463dd78216";
    const movies = await $http.$get(
      `https://api.themoviedb.org/3/movie/now_playing${apiKey}`
    );
    console.log(movies);
    return { movies };
  }
};
</script>

<style lang="scss" scoped>
.movies {
  &-lists {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 60px;
    &__item {
      width: 270px;
      min-height: 410px;
      cursor: pointer;
      margin-bottom: 10px;
      transition: all 0.3s ease;
      margin-right: 10px;
      &:hover {
        opacity: 0.8;
      }
      &-poster {
        width: 100%;
        height: 370px;
        border-radius: 30px;
      }
      &-name {
        margin: 0;
        margin-bottom: 8px;
        color: #fcb124;
        font-weight: 700;
        font-size: 18px;
      }
      &-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &-date {
        font-size: 14px;
        font-weight: 500;
        color: #555e68;
      }
      &-scores {
        font-size: 14px;
        font-weight: 500;
        color: #fcb124;
        svg {
          width: 15px;
          height: 15px;
        }
      }
      &-rating {
        font-size: 14px;
        font-weight: 500;
        color: #fcb124;
        margin-left: 8px;
        svg {
          width: 15px;
          height: 15px;
        }
      }
    }
  }

  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  &-genres {
    display: flex;
    align-items: center;
    &__item {
      padding: 10px 40px;
      font-size: 20px;
      color: #fff;
      font-weight: 600;
      border: none;
      background: #171717;
      cursor: pointer;
      border-radius: 25px;
      margin-right: 20px;
      transition: all 0.3s ease;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        background: #fcb124;
      }
    }
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
