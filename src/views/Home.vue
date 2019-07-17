<template>
  <div class="col home-content">
    <b-alert show class="text-center" variant="success" dismissible fade>
      <b>Well done!</b> You successfully logged in to this website.
      <br >Welcome <b>{{ form.username }}</b>
    </b-alert>
  </div>
</template>

<script>

  import UserApi from '@/services/userDetailsApi';

  export default {

    data: () => ({
      form: {
      },
    }),
    computed: {
      userId() {
        return UserApi.getUserDetails();
      },
    },
    mounted() {
      UserApi.getUserDetails();
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
      });
    },
  };
</script>
