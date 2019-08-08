<template>
  <div>
    <b-form class="row" @submit.prevent="edit()">
      <b-form-group class="col-md-6" label-for="username">
        <label class="typo__label ml-3">Username:</label>

        <b-form-input
          id="username"
          v-model="form.username"
          name="username"
          type="text"
          class="form-control"
          disabled
        />
      </b-form-group>

      <b-form-group class="col-md-6" label-for="email">
        <label class="typo__label ml-3">Email:</label>

        <b-form-input
          id="email"
          v-model="form.email"
          name="email"
          type="email"
          class="form-control"
          disabled
        />
      </b-form-group>

      <b-form-group id="input-group-3" class="col-md-6" label-for="firstName">
        <label class="typo__label ml-3">First Name:</label>

        <b-form-input
          id="firstName"
          v-model="form.name"
          v-validate.continues="'required|min:3|max:20'"
          name="name"
          type="text"
          :class="{ 'is-invalid': errors.has('name') }"
        />

        <span v-if="errors.has('name')" class="invalid-feedback">
          {{ errors.first('name') }}
        </span>
      </b-form-group>

      <b-form-group class="col-md-6" label-for="lastName">
        <label class="typo__label ml-3">Last Name:</label>

        <b-form-input
          id="lastName"
          v-model="form.surname"
          v-validate.continues="'required|min:3|max:20'"
          name="surname"
          type="text"
          :class="{ 'is-invalid': errors.has('surname') }"
        />

        <span v-if="errors.has('surname')" class="invalid-feedback">
          {{ errors.first('surname') }}
        </span>
      </b-form-group>

      <b-form-group class="col-md-4" label-for="position">
        <label class="typo__label ml-3">Position:</label>

        <b-form-select v-model="form.position" :options="options3">
          <template slot="first">
            <option :value="null" disabled>-- Please select your position --</option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group class="col-md-4" label-for="seniority">
        <label class="typo__label ml-3">Seniority:</label>

        <b-form-select v-model="form.seniority" :options="options1">
          <template slot="first">
            <option :value="null" disabled>-- Please select your seniority --</option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group class="col-md-4" label-for="location">
        <label class="typo__label ml-3">Location:</label>

        <b-form-select v-model="form.location" :options="options2">
          <template slot="first">
            <option :value="null" disabled>-- Please select your location --</option>
          </template>
        </b-form-select>
      </b-form-group>

      <b-form-group class="col-md-12" label-for="technologies">
        <label class="typo__label ml-3">Skills:</label>

        <technologies v-model="form.technologies"/>
      </b-form-group>

      <b-form-group class="col-md-12" label-for="biography">
        <label class="typo__label ml-3">About me:</label>

        <b-form-textarea
          id="textarea-state"
          v-model="form.biography"
          placeholder="Enter at least 10 characters"
          rows="3"
        />
      </b-form-group>

      <b-form-group class="col-md-12" label-for="avatar">
        <label class="typo__label ml-3">Try To Upload Some Image:</label>

        <b-form-file accept="image/jpeg, image/png, image/gif" @change="uploadImage"/>
        <b-img v-if="previewImage" :src="previewImage" class="uploading-image ml-3 mt-2" height="150"/>
        <b-link
          v-if="previewImage"
          v-b-tooltip.hover.top
          title="Delete image"
          class="ml-3"
          @click="deleteImage"
        >
          <i class="fas fa-times" style="color: var(--red)"/>
        </b-link>
      </b-form-group>
    </b-form>

    <div class="text-center space">
      <b-btn class="float-none d-inline-block btn btn-1" @click="edit()">
        Save changes
      </b-btn>
    </div>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapActions, mapState, mapGetters } from 'vuex';
  import Technologies from '../activity/Technologies';
  import { basePath } from '@/constants/apiEndpoints';

  export default {
    components: { Technologies },

    data: () => ({
      form: {
        position: '',
        seniority: null,
        name: '',
        surname: '',
        biography: '',
        location: '',
        technologies: [
          { id: null },
        ],
        avatar: {
          original: '',
        },
      },
      previewImage: null,
      formTechnologies: [],
      options1: [
        { value: '0', text: 'JUNIOR' },
        { value: '1', text: 'MIDDLE' },
        { value: '2', text: 'SENIOR' },
      ],
      options2: [
        { value: 'CHI', text: 'CHI' },
        { value: 'NYC', text: 'NYC' },
        { value: 'BOS', text: 'BOS' },
        { value: 'FRA', text: 'FRA' },
        { value: 'PAR', text: 'PAR' },
        { value: 'ORL', text: 'ORL' },
        { value: 'BUC', text: 'BUC' },
        { value: 'BRA', text: 'BRA' },
        { value: 'CLU', text: 'CLU' },
        { value: 'IAS', text: 'IAS' },
        { value: 'HAN', text: 'HAN' },
        { value: 'GUA', text: 'GUA' },
        { value: 'LYO', text: 'LYO' }
      ],
      options3: [
        { value: 'DEV', text: 'DEV' },
        { value: 'PO', text: 'PO' },
        { value: 'QA', text: 'QA' }
      ]
    }),
    computed: {
      ...mapState('account', ['user']),
      ...mapGetters('account', ['userId'])
    },
    mounted() {
      UserApi.userInfo(this.userId)
        .then(response => {
          this.form = response.data;
          if (this.form.avatar) {
            this.previewImage = basePath + '/' + this.form.avatar.original;
            this.form.avatar = null;
          }
        });

      UserApi.getTechnologies(this.userId)
        .then(response => {
          this.formTechnologies = response.data;
        });
    },
    methods: {
      ...mapActions('account', ['login', 'logout']),
      uploadImage(e) {
        const image = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(image);
        reader.onload = e => {
          this.previewImage = e.target.result;
          this.form.avatar = this.previewImage;
        };
      },
      edit() {
        const data = {
          ...this.form,
          id: this.userId,
        };

        UserApi.editUser(data)
          .then(() => {
            this.$toast.open({
              message: 'You\'ve successfully updated your profile!',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });

            this.$router.push({ name: 'profile' });
          })
          .catch(() => {
            this.$toast.open({
              message: 'Please complete all required fields',
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });
          });
      },
      deleteImage() {
        const data = {
          ...this.form,
          id: this.userId,
        };

        UserApi.deleteAvatar(data)
          .then(() => {
            this.$toast.open({
              message: 'Avatar successfully deleted!',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });

            this.$router.push({ name: 'profile' });
          })
          .catch(() => {
            this.$toast.open({
              message: 'Access denied!',
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            })
          })
      }
    }
  }
</script>
