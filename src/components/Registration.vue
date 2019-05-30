<template>
  <div class="background">
    <b-container class="col-md-9">
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4 class="text-center">
            Create an PentaBee account
            <hr />
          </h4>

          <b-form @submit.prevent="handleSubmit" class="row">
            <b-form-group
              id="input-group-1"
              label-for="input-1"
              class="col-md-6 first_group"
            >
              <span for="username" class="ml-2">Username</span>

              <b-form-input
                type="text"
                v-model="user.username"
                v-validate="'alpha|required|min:5|max:20'"
                id="username"
                name="username"
                class="form-control"
                :class="{
                  'is-invalid': submitted && errors.has('username')
                }"
              >
              </b-form-input>
              <span
                v-if="submitted && errors.has('username')"
                class="invalid-feedback "
              >
                {{ errors.first("username") }}
              </span>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label-for="input-2"
              class="col-md-6"
            >
              <span for="firstName" class="ml-2">First Name</span>

              <b-form-input
                type="text"
                v-model="user.firstName"
                v-validate="'required|min:3|max:20'"
                name="firstName"
                id="firstName"
                class="form-control"
                :class="{
                  'is-invalid': submitted && errors.has('firstName')
                }"
              >
              </b-form-input>

              <span
                v-if="submitted && errors.has('firstName')"
                class="invalid-feedback "
              >
                {{ errors.first("firstName") }}
              </span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label-for="input-3"
              class="col-md-6"
            >
              <span for="lastName" class="ml-2">Last Name</span>

              <b-form-input
                type="text"
                v-model="user.lastName"
                v-validate="'required|min:3|max:20'"
                id="lastName"
                name="lastName"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('lastName') }"
              >
              </b-form-input>
              <span
                v-if="submitted && errors.has('lastName')"
                class="invalid-feedback "
              >
                {{ errors.first("lastName") }}
              </span>
            </b-form-group>

            <b-form-group
              id="input-group-4"
              label-for="input-4"
              class="col-md-6"
            >
              <span for="email" class="ml-2">Email</span>
              <b-form-input
                type="email"
                v-model="user.email"
                v-validate="'required|email'"
                id="email"
                name="email"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('email') }"
              >
              </b-form-input>
              <span
                v-if="submitted && errors.has('email')"
                class="invalid-feedback "
              >
                {{ errors.first("email") }}
              </span>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label-for="input-5"
              class="col-md-6"
            >
              <span for="password" class="ml-2">Password</span>
              <input
                class="form-control"
                type="password"
                v-model="user.password"
                v-validate="'required|verify_password'"
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
            <b-form-group
              id="input-group-6"
              label-for="input-6"
              class="col-md-6"
            >
              <span for="confirmPassword" class="ml-2">Confirm Password</span>
              <input
                class="form-control"
                type="password"
                v-model="user.confirmPassword"
                v-validate="'required|confirmed:password'"
                id="confirmPassword"
                name="confirmPassword"
                :class="{
                  'is-invalid': submitted && errors.has('confirmPassword')
                }"
                data-vv-as="password"
              />
              <span
                v-if="submitted && errors.has('confirmPassword')"
                class="invalid-feedback "
              >
                {{ errors.first("confirmPassword") }}
              </span>
            </b-form-group>
          </b-form>
          <div class="text-center space">
            <b-btn
              pill
              block
              type="submit"
              variant="outline-warning"
              class="col-md-5 float-none d-inline-block"
              @click="handleSubmit"
            >
              Create your account
            </b-btn>
          </div>
          <p class="text-center">
            Already have a
            <b-link class="link" to="/">PentaBee</b-link> account?
            <b-link class="link" to="/login">Log in</b-link>
          </p>
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
        confirmPassword: ""
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
  color: #ffbc1d;
}

.background {
  background-color: #2d2d2d;
  position: absolute;
  height: 100%;
  width: 100%;
}

p {
  color: #565554;
}
.space {
  padding: 7px;
}
.ml-2 {
  color: #434747;
}
.link {
  color: #ffbc1d;
}
</style>
