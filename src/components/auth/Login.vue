<template>
  <div class="login-registration-background">
    <b-container fluid>
      <b-row align-h="center" class="mt-5">
        <b-card class="p-3">
          <h4>
            Please Enter Your Information
            <hr>
          </h4>
          
          <b-form @submit.prevent="submit()">
            <b-form-group
              id="input-group-1"
              label="Username:"
              label-for="username"
            >
              <b-form-input
                id="username"
                v-model="requestBody.username"
                v-validate="'required'"
                name="username"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('username') }"
              ></b-form-input>
              
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
                v-model="requestBody.password"
                v-validate="'required'"
                name="password"
                type="password"
                class="form-control"
                :class="{ 'is-invalid': submitted && errors.has('password') }"
              > </b-form-input>
              
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
                @click="submit()"
              >Login
              </b-btn>
            </div>
            
            <p class="text-center">
              Haven't got a
              <b-link class="link-redirect" to="/">PentaBee</b-link>
              account?
              <b-link class="link-redirect" to="/registration">Sign up</b-link>
            </p>
          </b-form>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  
  import LoginService from '../../services/loginAxios';
  
export default {
  data () {
    return {
      requestBody : {
        username: "",
        password: ""
      },
      submitted: false,
      router: this.$router,
    }
  },
  methods: {
    submit () {
      this.submitted = true;
      LoginService.login(this.requestBody).then ((response) => {
        console.log (response.this.requestBody);
      }).catch ((error) => {
        console.log (error.response.this.requestBody);
      });
    }
  }
};
</script>

