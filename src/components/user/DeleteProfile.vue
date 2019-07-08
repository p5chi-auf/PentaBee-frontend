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

  export default {
    methods: {
      onclick() {
        UserApi.delete(this.form)
          .catch(error => {
            return console.log(error);
          });
      },
    }
  };
</script>
