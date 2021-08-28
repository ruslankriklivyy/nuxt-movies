<template>
  <header class="header">
    <a href="/" class="header-logo">
      <img src="~/static/logo.png" alt="logo png" />
    </a>
    <nav>
      <ul class="menu">
        <li class="menu__item">
          <a href="/" class="menu__item-link">Home</a>
          <a href="/" class="menu__item-link">Watch Movies!</a>
        </li>
      </ul>
    </nav>
    <my-button>
      Login
    </my-button>
  </header>
</template>

<script lang="ts">
import MyButton from "./MyButton.vue";
export default {
  components: { MyButton }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  &-logo {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    &__item {
      &-link {
        color: #fcb124;
        font-size: 18px;
        font-weight: 700;
        margin-right: 25px;
        text-decoration: none;
        transition: all 0.3s ease;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: #ff3b57;
        }
      }
    }
  }
}
</style>
