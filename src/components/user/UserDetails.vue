<template>
  <div>
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
          v-validate.continues="'alpha_dash|required|min:4|max:50'"
          name="username"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors.has('username') }"
        />
        <span v-if="errors.has('username')" class="invalid-feedback">
          {{ errors.first('username') }}
        </span>
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
        <span v-if="errors.has('email')" class="invalid-feedback">
          {{ errors.first('email') }}
        </span>
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

        <span v-if="errors.has('name')" class="invalid-feedback">
          {{ errors.first('name') }}
        </span>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        class="col-md-6"
        label="Position"
        label-for="position"
      >
        <b-form-input
          id="position"
          v-model="form.position"
          name="position"
          type="text"
          class="form-control"
          style="text-transform:uppercase"
        />
      </b-form-group>

      <b-form-group
        id="input-group-5"
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

        <span v-if="errors.has('surname')" class="invalid-feedback">
          {{ errors.first('surname') }}
        </span>
      </b-form-group>

      <b-form-group
        id="input-group-6"
        class="col-md-6"
        label="Seniority"
        label-for="seniority"
      >
        <b-form-select v-model="form.seniority" :options="options">
          <template slot="first">
            <option :value="null" disabled>-- Please select your seniority --</option>
          </template>
        </b-form-select>
      </b-form-group>
    </b-form>
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
  import UserApi from '@/services/userDetailsApi';
  import { mapActions,mapState } from 'vuex';

  export default {
    data: () => ({
        form: {
          id: null,
          username: '',
          email: '',
          position: '',
          seniority: null,
          name: '',
          surname: '',
          technologies: [
            {
              id: null,
              name: ''
            }
          ]
        },
        seniority: null,
        options: [
          { value: '0', text: 'JUNIOR' },
          { value: '1', text: 'MIDDLE' },
          { value: '2', text: 'SENIOR' },
        ],
    }),
    computed:{
      ...mapState('account',['user']),
      userId(){
        return this.user && this.user.id || 92
      },
    },
    mounted() {
      UserApi.getUserDetails();
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
      }).catch(error => {
        console.log(error)
      })
    },
    methods: {
      ...mapActions('account',['login','logout']),
      edit() {
        const body = {
          ...this.form,
          id:this.userId,
        }
        UserApi.editUser(body)
          .catch(error => {
            return console.log(error);
          });
      },
    },
  };
</script>
