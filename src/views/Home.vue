<template>
  <div id="app">
    <!--    <div>-->
    <!--      <router-link to="/Login"> Login</router-link> |-->
    <!--      <router-view />-->
    <!--      <br />-->
    <!--    </div>-->
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h3 class="mb-4">Login</h3>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Password:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                type="password"
                v-model="form.password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="remember">Remember me</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <p align="right">
              <b-button type="submit" variant="primary">Submit</b-button>&nbsp;
            </p>
          </b-form>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      showDismissibleAlert: false,
      form: {
        email: "",
        password: "",
        food: null,
        checked: []
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
      this.form.food = null;
      this.form.checked = [];
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
  /*background-color: #eef1f4;*/
  font-family: "Lato", sans-serif;
}
b-container {
  position: fixed;
}
</style>
