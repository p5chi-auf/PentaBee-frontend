<template>
  <div>
    <div class="text-center space">
      <b-btn
        class="col-md-5 float-none d-inline-block btn btn-1"
        variant="warning"
        block
        pill
        @click="onclick()"
      > Delete Account
      </b-btn>
    </div>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapActions,mapState } from 'vuex';

  export default {
    computed:{
      ...mapState('account',['user']),
      userId(){
        return this.user && this.user.id || UserApi.getUserDetails()
      },
    },
    methods: {
      ...mapActions('account',['login','logout']),
      onclick() {
        const body = {
        ...this.form,
        id:this.userId,
        };
        UserApi.delete(body)
          .then(response => {
            this.$router.push('/login');
            console.log(response);
          })
          .catch(error => {
            return console.log(error);
          });
      },
    }
  };
</script>
