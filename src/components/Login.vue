<template>
  <div class="login-registration-background">
    <b-container fluid>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4>
            Please Enter Your Information
            <hr/>
          </h4>

          <b-form @submit.prevent="handleSubmit">
            <b-form-group id="input-group-1" label-for="input-1">
              <span for="username" class="ml-2 text-form">Username</span>

              <b-form-input
                type="text"
                v-model="user.username"
                v-validate="'required'"
                id="username"
                name="username"
                class="form-control"
                :class="{'is-invalid': submitted && errors.has('username')}"
              >
              </b-form-input>
              <span
                v-if="submitted && errors.has('username')"
                class="invalid-feedback "
              >
                {{ errors.first("username") }}
              </span>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <span for="password" class="ml-2 text-form">Password</span>

              <input  class="form-control"
                type="password"
                v-model="user.password"
                v-validate="'required'"
                id="password"
                name="password"
                :class="{ 'is-invalid': submitted && errors.has('password') }"
                ref="password"
              />
              <span
                v-if="submitted && errors.has('password')"
                class="invalid-feedback "
              >
                {{ errors.first("password") }}
              </span>
            </b-form-group>

            <div class="text-center button-padding">
              <b-btn
                pill
                block
                type="submit"
                variant="outline-warning"
                @click="handleSubmit"
              >
                <span class="ajax-loader"></span>
                Login
              </b-btn>
            </div>
            <p class="text-center">
              Haven't got a
              <b-link class="link-redirect" to="/">PentaBee</b-link>
              account?
              <b-link class="link-redirect" to="/registration">Sign up</b-link>
            </p>
          </b-form>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert("Your data are submited\n\n" + JSON.stringify(this.user));
        }
      });
    }
  }
};
</script>

<style>
b-form-group {
  position: fixed;
}
</style>
