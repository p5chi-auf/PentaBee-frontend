<template>
  <div class="col home-content">
    <b-spinner v-if="spinner===true" class="spinner" variant="warning" label="Loading..."/>

    <b-alert v-else show class="text-center" variant="warning" dismissible fade>
      <b>Well done!</b> Welcome <b>{{ form.username }}</b>
    </b-alert>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapGetters } from 'vuex';

  export default {
    data: () => ({
      form: {},
      spinner: true
    }),
    computed: {
      ...mapGetters('account', ['userId']),
    },
    mounted() {
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
        this.spinner = false;
      });
    },
  };
</script>
