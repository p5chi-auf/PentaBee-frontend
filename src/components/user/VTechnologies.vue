<template>
  <b-form-group
    id="input-group-7"
    class="col-md-12"
    label-for="technologies"
  >
    <label class="typo__label">Technologies</label>
    <multiselect
      v-model="form.technologies"
      placeholder="Search a technology"
      label="name" track-by="id"
      :options="formTechnologies"
      :multiple="true"
      :taggable="true"
    />
    <pre class="language-json"><code>{{ form.technologies }}</code></pre>
  </b-form-group>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import Details from './UserDetails';
  import { mapState } from 'vuex';

  export default {
      data: () => ({
        form: {
          id: null,
          email: '',
          position: '',
          seniority: '',
          name: '',
          surname: '',
          technologies: [
            {
              id: null,
              name: '',
            },
          ],
        },
        formTechnologies: [
        ]
      }),
      computed:{
        ...mapState('account',['user']),
        userId(){
          return UserApi.getUserDetails()
        },
      },
      mounted() {
        UserApi.getUserDetails();

        UserApi.userInfo(this.userId).then((response) => {
          this.form = response.data;
        }).catch(error => {
          console.log(error);
        });

        UserApi.getTechnologies(this.userId).then((response) => {
          this.formTechnologies = response.data;
          console.log(this.formTechnologies)

        }).catch(error => {
          console.log(error);
        });
      },
  }
</script>
