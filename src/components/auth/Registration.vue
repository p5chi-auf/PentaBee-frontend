<template>
  <div class="login-registration-background">
    <b-container class="col-md-8">
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4 class="text-center">
            Create an PentaBee account
            <hr class="line">
          </h4>
          <b-form class="row" @submit.prevent="registerIt()">
            <b-form-group
              id="input-group-1"
              class="col-md-6"
              label="Username:"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="form.username"
                v-validate.continues="'alpha_dash|required|min:4|max:50'"
                name="username"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.has('username') }"
              />

              <span v-if="errors.has('username')" class="invalid-feedback">{{
                errors.first('username')
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              class="col-md-6"
              label="First Name:"
              label-for="firstName"
            >
              <b-form-input
                id="firstName"
                v-model="form.name"
                v-validate.continues="'required|min:3|max:20'"
                name="name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.has('name') }"
              />

              <span v-if="errors.has('name')" class="invalid-feedback">{{
                errors.first('name')
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              class="col-md-6"
              label="Email:"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="form.email"
                v-validate.continues="'required|email'"
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors.has('email') }"
              />
              <span v-if="errors.has('email')" class="invalid-feedback">{{
                errors.first('email')
              }}</span>
            </b-form-group>
            <b-form-group
              id="input-group-4"
              class="col-md-6"
              label="Last Name:"
              label-for="lastName"
            >
              <b-form-input
                id="lastName"
                v-model="form.surname"
                v-validate.continues="'required|min:3|max:20'"
                name="surname"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.has('surname') }"
              />

              <span v-if="errors.has('surname')" class="invalid-feedback">{{
                errors.first('surname')
              }}</span>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              class="col-md-6"
              label="Password:"
              label-for="password"
            >
              <b-form-input
                id="password"
                ref="password"
                v-model="form.password"
                v-validate.continues="{
                  required: true,
                  regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,})/,
                }"
                name="password"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.has('password') }"
              />

              <span v-if="errors.has('password')" class="invalid-feedback">
                {{
                  'The password should contain Minimum 8, at least 1 Uppercase Alphabet, 1 Lowercase Alphabet, 1 Number and 1 Special Character.'
                }}
              </span>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              class="col-md-6"
              label="Confirm Password:"
              label-for="confirmPassword"
            >
              <b-form-input
                id="confirmPassword"
                v-model="form.confirm_password"
                v-validate="'required|confirmed:password'"
                name="confirm_password"
                type="password"
                class="form-control"
                data-vv-as="password"
                :class="{
                  'is-invalid': errors.has('confirm_password'),
                }"
              />

              <span
                v-if="errors.has('confirm_password')"
                class="invalid-feedback"
              >{{ errors.first('confirm_password') }}</span>
            </b-form-group>
          </b-form>

          <div class="text-center button">
            <b-btn
              class="col-md-5 float-none d-inline-block btn btn-1"
              variant="warning"
              block
              pill
              @click="registerIt()"
            >Create your account
            </b-btn>
          </div>

          <p class="text-center">
            Already have a
            <b-link class="link-redirect">PentaBee</b-link>
            account?
            <b-link class="link-redirect" to="/login">Log in</b-link>
          </p>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import RegisterService from '@/services/authApi';

export default {
  data: () => ({
      form: {
      },
  }),
  methods: {
    registerIt() {
      RegisterService.register(this.form)
        .then(response => {
          this.$router.push('/login');
          console.log(response);
        })
        .catch(error => {
          return console.log(error);
        });
    },
  },
};
</script>

