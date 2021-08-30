<template>
  <button class="btn" @click="handelShowModal">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Function,
      required: true
    }
  },
  methods: {
    handelShowModal() {
      this.$emit("showModal");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 45px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  background: #ff3b57;
  border-radius: 20px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  &:hover {
    background: #fcb124;
    color: #1b1d1c;
  }
}
</style>
