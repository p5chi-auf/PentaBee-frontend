<template>
  <div>
    <b-form class="row" @submit.prevent="change()">
      <b-form-group
        id="input-group-1"
        class="col-md-4"
        label="Old Password"
        label-for="old_password"
      >
        <b-form-input
          id="old_password"
          v-model="form.old_password"
          v-validate.continues="{
            required: true,
            regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])(?=.{8,})/,
          }"
          name="old_password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors.has('old_password') }"
        />

        <span v-if="errors.has('old_password')" class="invalid-feedback">
          {{ 'Incorrect old password' }}
        </span>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        class="col-md-4"
        label="New Password"
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
        id="input-group-3"
        class="col-md-4"
        label="Repeat New Password"
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
    <div class="text-center space">
      <b-btn
        class="col-md-5 float-none d-inline-block btn btn-1"
        variant="warning"
        block
        pill
        @click="change()"
      > Save Changes
      </b-btn>
    </div>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapActions,mapState } from 'vuex';

  export default {
    data: () => ({
      form: {
        old_password: '',
        password: '',
        confirm_password: '',
      },
    }),
    computed:{
      ...mapState('account',['user']),
      userId(){

        return this.user && this.user.id || UserApi.getUserDetails()
      },
    },
    methods: {
      ...mapActions('account',['login','logout']),
      change() {
        const body = {
          ...this.form,
          id:this.userId,
        };
        UserApi.changePassword(body)
          .then(response => {
            this.$router.push('/login');
            console.log(response);
          })
          .catch(error => {
            return console.log(error);
          });
      }
    }
  };
</script>
