<template>
  <div>
    <div class="text-center space">
      <b-btn
        class="col-md-5 float-none d-inline-block btn btn-1"
        variant="warning"
        block
        pill
        @click="show()"
      > Delete Account
      </b-btn>
    </div>
    <modal
      name="delete-account"
      transition="nice-modal-fade"
      :min-width="100"
      :min-height="100"
      :delay="100"
      :adaptive="true"
    >
      <div class="example-modal-content text-center mt-5">
        ARE YOU SURE YOU WANT TO PERMANENTLY DELETE YOUR ACCOUNT?
        <p class="mt-4 ml-4">This account will no longer be available and all data in the account <br>
          will be permanently deleted.</p>
      </div>
      <div class="row mt-5">
        <b-button class="col-5 mx-auto" variant="dark" @click="cancel">No</b-button>
        <b-button class="col-5 mx-auto" variant="warning" @click="onclick()">Yes</b-button>
      </div>
    </modal>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapActions, mapState, mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapState('account', ['user']),
      ...mapGetters('account',['userId']),
    },
    methods: {
      ...mapActions('account', ['login', 'logout']),

      show(){
        this.$modal.show('delete-account');

      },
      cancel () {
        this.$modal.hide('delete-account');
        return this.edit = false
      },
      onclick() {
        const data = {
          ...this.form,
          id: this.userId,
        };
        UserApi.delete(data)
          .then(() => {
            window.localStorage.removeItem('token');
            this.$router.push('/login');
          })
          .catch(error => {
            return console.log(error);
          });
      }
    }
  };
</script>
