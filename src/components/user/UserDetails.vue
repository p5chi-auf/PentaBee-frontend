<template>
  <div>
    <h6 class="text-left font-weight-bold">General</h6>
    <h6 class="text-left" style="color: #a3a3a3;">Setup your general profile details.</h6><br>

    <b-form class="row" @submit.prevent="edit()">
      <b-form-group
        id="input-group-1"
        class="col-md-6"
        label="Username"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="form.username"
          v-validate.continues="'alpha_dash|required|min:5|max:20'"
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
        label="Email"
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
        id="input-group-3"
        class="col-md-6"
        label="First Name"
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
        id="input-group-4"
        class="col-md-6"
        label="Last Name"
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

      <b-form-group class="col-md-6" label="Position">
        <b-form-input type="text" class="form-control"/>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        class="col-md-6"
        label="Seniority"
        label-for="seniority"
      >
        <b-form-select v-model="seniority" :options="options">
          <template slot="first">
            <option :value="null" disabled>-- Please select your seniority --</option>
          </template>
        </b-form-select>

        <div class="mt-3">Selected: <strong>{{ seniority }}</strong></div>
      </b-form-group>
      <b-card-text>
        A username : {{ form.username }}
      </b-card-text>
    </b-form>
    <br>
    <div class="text-center space">
      <b-btn
        class="col-md-5 float-none d-inline-block btn btn-1"
        variant="warning"
        block
        pill
        @click="edit()"
      > Save Changes
      </b-btn>
    </div>
  </div>
</template>

<script>
  import UserApi from '@/services/user/userDetailsApi';

  export default {
    data() {
      return {
        form: {
          id: 0,
          username: 'fghdfg',
          email: '',
          position: '',
          seniority: 'value',
          name: '',
          surname: '',
          technologies: [
            {
              id: 0,
            },
          ],
        },
        seniority: null,
        options: [
          { value: '0', text: 'JUNIOR' },
          { value: '1', text: 'MIDDLE' },
          { value: '2', text: 'SENIOR' },
        ],
      };
    },
    mounted: function() {
      let id = window.localStorage.getItem('current_user_id');
      UserApi.userInfo(id)
        .then(response => {
          console.log(response)
        });
    },
    methods: {
      edit(id) {
        UserApi.edit(this.form)
          .then(response => {
            self.response_key = response.id.result;
          });
        alert('User not found.');
        console.log(error.response.this.form);
      },
    }
  };
</script>
