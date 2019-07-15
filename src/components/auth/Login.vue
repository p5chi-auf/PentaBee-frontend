<template>
  <div class="login-registration-background">
    <b-container fluid>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4>
            Please Enter Your Information
            <hr class="line">
          </h4>

          <b-form @submit.prevent="onSubmit()">
            <b-form-group
              id="input-group-1"
              label="Username:"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="form.username"
                v-validate="'required'"
                name="username"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors.has('username') }"
              />

              <span
                v-if=" errors.has('username')"
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
                v-model="form.password"
                v-validate="'required'"
                name="password"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': errors.has('password') }"
              />

              <span
                v-if=" errors.has('password')"
                class="invalid-feedback"
              >{{ errors.first('password') }}</span>
            </b-form-group>

            <div class="text-center button-padding">
              <b-btn
                variant="warning"
                class="btn btn-1"
                block
                pill
                @click="onSubmit()"
              >Login
              </b-btn>
            </div>

            <p class="text-center">
              Haven't got a
              <b-link class="link-redirect" to="#">PentaBee</b-link>
              account?
              <b-link class="link-redirect" to="/registration">Sign up</b-link>
            </p>
          </b-form>
          <div class>
            <b-alert variant="danger" :show="!!loginError" dismissible>
              {{ loginError }}
            </b-alert>
          </div>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import LoginService from '@/services/authApi';
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
        form: {
          username: '',
          password: '',
        },
      loginError: '',
    }),
    methods: {
      ...mapActions('account',['login','logout']),
      onSubmit() {
        console.log('before login');
        LoginService.login(this.form)
          .then(response => {
            console.log('login data', response.data);
            const {token}=response.data;
            window.localStorage.setItem('token', token);
            this.login(token);
            this.$router.push('/');
          })
          .catch(error => {
          this.loginError = error;
            this.logout();
            console.log(error);
          });
      },
    },
  };
</script>
