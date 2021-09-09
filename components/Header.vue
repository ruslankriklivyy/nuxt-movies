<template>
  <header class="header">
    <my-modal
      :modalForm="true"
      v-bind:showModal.sync="isShowModal"
      v-if="isShowModal"
    >
      <my-form />
    </my-modal>
    <a href="/" class="header-logo">
      <img src="~/static/logo.png" alt="logo png" />
    </a>
    <nav>
      <ul class="menu">
        <li class="menu__item">
          <nuxt-link to="/" class="menu__item-link">Home</nuxt-link>
          <nuxt-link to="/movies" class="menu__item-link"
            >Watch Movies!</nuxt-link
          >
        </li>
      </ul>
    </nav>
    <my-button v-bind:showModal.sync="isShowModal">
      Login
    </my-button>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import MyButton from "./MyButton.vue";
import MyForm from "./MyForm.vue";
import MyModal from "./MyModal.vue";

export default Vue.extend({
  components: { MyButton, MyModal, MyForm },
  data() {
    return {
      isShowModal: false
    };
  },
  methods: {
    setIsShowModal(visible: boolean) {
      this.isShowModal = visible;
    }
  }
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  @media (max-width: 778px) {
    flex-direction: column;
  }
  &-logo {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .menu {
    display: flex;
    align-items: center;
    @media (max-width: 778px) {
      margin-bottom: 30px;
    }
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
