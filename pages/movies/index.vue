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
          <div class="movies-lists__item">
            <img
              class="movies-lists__item-poster"
              src="https://image.tmdb.org/t/p/w500//3sLz2yv6vBDWqBbd8rdnNeoJ2kJ.jpg"
              alt="movie jpg"
            />
            <h4 class="movies-lists__item-name">
              The Witcher: Nightmare of the Wolf
            </h4>
            <div class="movies-lists__item-bottom">
              <span class="movies-lists__item-date">
                2021-08-23
              </span>
              <div class="movies-lists__item-bottom__right">
                <span class="movies-lists__item-scores">122</span>
                <span class="movies-lists__item-rating">
                  7.7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.movies {
  &-lists {
    margin-top: 60px;
    &__item {
      width: 270px;
      height: 410px;
      cursor: pointer;
      &-poster {
        width: 100%;
        height: 370px;
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
        &__right {
        }
      }
      &-date {
        font-size: 14px;
        font-weight: 500;
        color: #555e68;
      }
      &-scores {
        font-size: 14px;
      }
      &-rating {
        font-size: 14px;
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
