<template>
  <div class="modal">
    <div class="modal-content">
      <button class="modal-btn__close" @click="cancelModal">
        <svg
          height="329pt"
          viewBox="0 0 329.26933 329"
          width="329pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
          />
        </svg>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    cancelModal() {
      this.$emit("update:showModal", false);
    }
  }
});
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 500;
  background: rgba($color: #000000, $alpha: 0.7);
  &-btn__close {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcb124;
    border: none;
    width: 35px;
    height: 35px;
    cursor: pointer;
    svg {
      width: 22px;
      height: 22px;
    }
  }
  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 600px;

    iframe {
      width: 900px;
      height: 600px;
      border: none;
    }
  }
}
</style>
