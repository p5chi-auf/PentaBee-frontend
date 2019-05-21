<template>
  <div class="background">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4>
            Please Enter Your Information
            <hr color="#5ca0ca" />
          </h4>

          <b-form @submit="onReset">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.email"
                v-validate="email"
                data-vv-rules="required|email"
                type="email"
                placeholder="Username"
                name="email"
              >
              </b-form-input>

              <p v-if="errors.has('email')">{{ errors.first("email") }}</p>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                placeholder="Password"
							>
              </b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">
              Login
            </b-button>
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
        email: '',
        password: ""
      }
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
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
  background-color: #202223;
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
