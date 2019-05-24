<template>
  <div class="background">
    <b-container fluid>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3  ">
          <h4>
            Please Enter Your Information
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
                v-model="form.password"
                v-validate.continues="'required|min:5'"
                name="password"
                placeholder="Password"
                type="password"
              >
              </b-form-input>
              <p v-if="errors.has('password')" class="f-validations">
                {{ errors.first("password") }}
              </p>
            </b-form-group>
            <b-btn to="/" type="submit" pill block variant="primary">
              Login
            </b-btn>
            <br />
            <p align="center">
              Haven't got an account?
              <b-link to="/registration">Sign up</b-link>
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
      form: {
        email: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.form.username = "";
      this.form.password = "";
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

b-form-group {
  position: fixed;
}
</style>
