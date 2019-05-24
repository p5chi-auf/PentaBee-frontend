<template>
  <div class="background">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3  ">
          <h4>
            Create an account and find out what's going on inside
            <hr color="#5ca0ca" />
          </h4>

          <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.username"
                v-validate.continues="'required|min:5'"
                type="username"
                placeholder="Username"
                name="username"
              >
              </b-form-input>
              <p v-if="errors.has('username')" class="f-validations">
                {{ errors.first("username") }}
              </p>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.name"
                v-validate.continues="'required|min:3'"
                type="name"
                placeholder="First Name"
                name="name"
              >
              </b-form-input>
              <p v-if="errors.has('name')" class="f-validations">
                {{ errors.first("name") }}
              </p>
            </b-form-group>
            <b-form-group id="input-group-3" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.surname"
                v-validate.continues="'required|min:5'"
                type="surname"
                placeholder="Last Name"
                name="surname"
              >
              </b-form-input>
              <p v-if="errors.has('surname')" class="f-validations">
                {{ errors.first("surname") }}
              </p>
            </b-form-group>
            <b-form-group id="input-group-4" label-for="input-4">
              <b-form-input
                id="input-4"
                v-model="form.email"
                v-validate="'email'"
                v-validate.continues="'required'"
                type="email"
                placeholder="Email"
                name="email"
              >
              </b-form-input>
              <p v-if="errors.has('email')" class="f-validations">
                {{ errors.first("email") }}
              </p>
            </b-form-group>
            <b-form-group id="input-group-5" label-for="input-5">
              <b-input
                v-validate="'required'"
                name="password"
                type="password"
                :class="{ 'is-danger': errors.has('password') }"
                placeholder="Password"
                ref="password"
              >
              </b-input>
              <span
                v-show="errors.has('password')"
                class="f-validations help is-danger"
                >{{ errors.first("password") }}</span
              >
            </b-form-group>
            <b-form-group id="input-group-6" label-for="input-6">
              <b-input
                v-validate="'required|confirmed:password'"
                name="password_confirmation"
                type="password"
                :class="{ 'is-danger': errors.has('password_confirmation') }"
                placeholder="Confirm Password"
                data-vv-as="password"
              >
              </b-input>
              <span
                v-show="errors.has('password_confirmation')"
                class="f-validations help is-danger"
                >{{ errors.first("password_confirmation") }}</span
              >
            </b-form-group>
            <b-button to="/login" type="submit" pill block variant="primary">
              Create your account
            </b-button>
            <br />
            <p align="center">
              Already have a <b-link to="/">PentaBee</b-link> account?
              <b-link to="/login">Log in</b-link>
            </p>
          </b-form>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      status: "Not accepted",
      form: {
        username: "",
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmpassword: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.form.username = "";
      this.form.name = "";
      this.form.surname = "";
      this.form.email = "";
      this.form.password = "";
      this.form.confirmpassword = "";
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");

div {
  font-family: "Lato", sans-serif;
}
login {
  position: center;
}
h4 {
  color: #5ca0ca;
}

.background {
  background-color: #2d2d2d;
  position: absolute;
  height: 100%;
  width: 100%;
}
.f-validations {
  color: rgb(255, 106, 106);
  position: relative;
}
p {
  color: #565554;
}
</style>
