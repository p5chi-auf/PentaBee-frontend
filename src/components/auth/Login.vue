<template>
  <div class="login-registration-background">
    <b-container fluid>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4>
            Please Enter Your Information
            <hr >
          </h4>

          <b-form @submit.prevent="handleSubmit">
            <b-form-group
              id="input-group-1"
              label="Username:"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="user.username"
                v-validate="'required'"
                name="username"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('username') }"
              />

              <span
                v-if="submitted && errors.has('username')"
                class="invalid-feedback"
              >{{ errors.first('username') }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="password"
            >
              <b-form-input
                id="password"
                ref="password"
                v-model="user.password"
                v-validate="'required'"
                name="password"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('password') }"
              />

              <span
                v-if="submitted && errors.has('password')"
                class="invalid-feedback"
              >{{ errors.first('password') }}</span>
            </b-form-group>

            <div class="text-center button-padding">
              <b-btn
                type="submit"
                variant="outline-warning"
                block
                pill
                @click="handleSubmit"
              >Login</b-btn>
            </div>

            <p class="text-center">
              Haven't got a
              <b-link class="link-redirect" to="/">PentaBee</b-link>account?
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
        username: '',
        password: '',
      },
      submitted: false,
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert('Your data are submit\n\n' + JSON.stringify(this.user));
        }
      });
    },
  },
};
</script>
