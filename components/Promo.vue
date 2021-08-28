<template>
  <section class="promo">
    <div class="promo-left">
      <h1 class="promo-left__title">
        POPCORN, PLEASE!
      </h1>
      <button class="promo-left__btn">Start Watching</button>
    </div>
  </section>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.promo {
  display: flex;
  align-items: center;
  padding-top: 120px;
  &-left {
    width: 50%;
    &__title {
      font-weight: 700;
      line-height: 1.1;
      font-size: 86px;
      color: #fcb124;
      margin-bottom: 40px;
    }
    &__btn {
      padding: 8px 45px;
      font-size: 18px;
      font-weight: 500;
      color: #fcb124;
      border: 2px solid #fcb124;
      background: transparent;
      cursor: pointer;
      border-radius: 20px;
      transition: all 0.3s ease;
      &:hover {
        color: #1b1d1c;
        background: #fcb124;
      }
    }
  }
}
</style>
