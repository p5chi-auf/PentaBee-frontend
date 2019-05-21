<template>
  <div>
    <b-container class="backgound">
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4>
            Please Enter Your Information
            <hr color="#5ca0ca" />
          </h4>
          <b-form @submit="onSubmit" v-if="show">
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
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <p align="right">
              <b-button type="submit" to="/" variant="primary"> Login </b-button
              >&nbsp;
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
      showDismissibleAlert: false,
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");

div {
  font-family: "Lato", sans-serif;
}

b-container {
  /*position: fixed;*/
}

h4 {
  color: #5ca0ca;
}
.backgound {
  /*position: absolute;*/
  /*background-color: #4e4e4b;*/
  /*margin-top: -25px;*/
  height: 100%;
  /*margin: 0 auto;*/
}
</style>
