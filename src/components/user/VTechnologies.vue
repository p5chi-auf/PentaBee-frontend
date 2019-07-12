<template>
  <b-form-group
    id="input-group-7"
    class="col-md-12"
    label-for="technologies"
  >
    <label class="typo__label">Technologies</label>
    <multiselect
      v-model="value"
      placeholder="Search a technologie"
      label="name" track-by="id"
      :options="form"
      :multiple="true"
      :taggable="true"
    />
    <pre class="language-json"><id>{{ value }}</id></pre>
  </b-form-group>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapState } from 'vuex';
  import Multiselect from 'vue-multiselect'

  export default {
    components: {
      Multiselect
    },
      data: () => ({
        value: [
        ],
        form: [
        ]
      }),
      computed:{
        ...mapState('account',['user']),
        userId(){
          return this.user && this.user.id || UserApi.getUserDetails()
        },
      },
      mounted() {
        UserApi.getUserDetails();

        UserApi.getTechnologies(this.userId).then((response) => {
          this.form = response.data;
          console.log(this.form)

        }).catch(error => {
          console.log(error);
        });
      }
  }
</script>
