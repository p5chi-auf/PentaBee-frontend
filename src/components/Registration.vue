<template>
  <div class="background">
    <b-container fluid>
      <b-row align-h="center" class="mt-5">
        <b-card>
          <h4>
            Create an account and find out what's going on inside
            <hr color="#5ca0ca" />
          </h4>

          <b-form @submit.prevent="handleSubmit">
            <b-form-group id="input-group-1" label-for="input-1">
              <label for="username">Username</label>
              <b-form-input
                type="text"
                v-model="user.username"
                v-validate="'alpha|required|min:5|max:20'"
                placeholder="Username"
                id="username"
                name="username"
                class="form-control"
                :class="{
                  'is-invalid': submitted && errors.has('username')
                }"
              >
              </b-form-input>
              <p
                v-if="submitted && errors.has('username')"
                class="invalid-feedback f-validations"
              >
                {{ errors.first("username") }}
              </p>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <label for="firstName">First Name</label>
              <b-form-input
                type="text"
                v-model="user.firstName"
                v-validate="'required|min:3|max:20'"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                class="form-control"
                :class="{
                  'is-invalid': submitted && errors.has('firstName')
                }"
              >
              </b-form-input>
              <p
                v-if="submitted && errors.has('firstName')"
                class="invalid-feedback f-validations"
              >
                {{ errors.first("firstName") }}
              </p>
            </b-form-group>

            <b-form-group id="input-group-3" label-for="input-3">
              <label for="lastName">Last Name</label>
              <b-form-input
                type="text"
                v-model="user.lastName"
                v-validate="'required|min:3|max:20'"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('lastName') }"
              >
              </b-form-input>
              <p
                v-if="submitted && errors.has('lastName')"
                class="invalid-feedback f-validations"
              >
                {{ errors.first("lastName") }}
              </p>
            </b-form-group>

            <b-form-group id="input-group-4" label-for="input-4">
              <label for="email">Email</label>
              <b-form-input
                type="email"
                v-model="user.email"
                v-validate="'required|email'"
                placeholder="Email"
                id="email"
                name="email"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('email') }"
              >
              </b-form-input>
              <p
                v-if="submitted && errors.has('email')"
                class="invalid-feedback f-validations"
              >
                {{ errors.first("email") }}
              </p>
            </b-form-group>

            <b-form-group id="input-group-5" label-for="input-5">
              <label for="password">Password</label>
              <input
                class="form-control"
                type="password"
                v-model="user.password"
                v-validate="'required|verify_password'"
                id="password"
                name="password"
                :class="{ 'is-invalid': submitted && errors.has('password') }"
                placeholder="Password"
                ref="password"
              />
              <span
                v-if="submitted && errors.has('password')"
                class="invalid-feedback f-validations"
                >{{ errors.first("password") }}</span
              >
            </b-form-group>
            <b-form-group id="input-group-6" label-for="input-6">
              <label for="confirmpassword">Confirm Password</label>
              <input
                class="form-control"
                type="password"
                v-model="user.confirmpassword"
                v-validate="'required|confirmed:password'"
                id="confirmpassword"
                name="confirmpassword"
                :class="{
                  'is-invalid': submitted && errors.has('confirmpassword')
                }"
                placeholder="Confirm Password"
                data-vv-as="password"
              />
              <span
                v-if="submitted && errors.has('confirmpassword')"
                class="invalid-feedback f-validations"
                >{{ errors.first("confirmpassword") }}</span
              >
            </b-form-group>

            <div class="form-group">
              <b-button
                pill
                block
                variant="primary"
                class="btn btn-primary"
                @click="handleSubmit"
              >
                Register
              </b-button>
              <p align="center">
                Already have a <b-link to="/">PentaBee</b-link> account?
                <b-link to="/login">Log in</b-link>
              </p>
            </div>
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
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: ""
      },
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
        }
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
  width: 90%;
  word-wrap: break-word;
  display: inline-block;
}
p {
  color: #565554;
}
</style>
