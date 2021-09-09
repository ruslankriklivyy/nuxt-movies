<template>
  <div class="sign-in">
    <h4>Sign in</h4>
    <validation-observer v-slot="{ handleSubmit }" ref="form">
      <form class="form" @submit.prevent="handleSubmit(onSubmit)">
        <validation-provider
          class="form-input"
          rules="required|email"
          v-slot="{ errors }"
        >
          <input
            v-model="email"
            name="email"
            type="text"
            placeholder="Enter your e-mail"
          />
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider
          class="form-input"
          rules="required|password"
          v-slot="{ errors }"
        >
          <input
            v-model="password"
            name="password"
            type="text"
            placeholder="Enter your password"
          />
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <my-button type="submit">Sign in</my-button>
      </form>
    </validation-observer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import MyButton from "./MyButton.vue";

export default Vue.extend({
  components: { MyButton, ValidationProvider, ValidationObserver },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      (this.$refs.form as Vue & { validate: () => any })
        .validate()
        .then(success => {
          if (!success) {
            return;
          }

          alert(JSON.stringify({ email: this.email, password: this.password }));

          // Resetting Values
          this.email = this.password = "";

          // Wait until the models are updated in the UI
          this.$nextTick(() => {
            (this.$refs.form as Vue & { reset: () => void }).reset();
          });
        });
    }
  }
});
</script>

<style lang="scss" scoped>
.sign-in {
  padding: 0 15px;

  h4 {
    color: #fff;
    font-size: 35px;
    margin-bottom: 30px;
  }
  button {
    margin-top: 40px;
  }
  @media (max-width: 992px) {
    button {
      margin-top: 20px;
    }
  }
}
.form {
  display: flex;
  flex-direction: column;
  span {
    color: #fff;
    margin-top: 5px;
  }
  &-input {
    height: 43px;
    margin-bottom: 20px;

    input {
      border-radius: 20px;
      padding: 5px 15px;
      outline: none;
      width: 100%;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      font-size: 16px;
      &:focus::placeholder {
        font-size: 0;
      }
      &:focus {
        border-color: #fcb124;
      }
    }
  }
}
</style>
