<template>
  <div class="profile home-content">
    <b-container>
      <b-card-group deck>
        <b-card
          border-variant="warning"
          header-bg-variant="transparent"
          align="center"
        >
          <h4 class="text-center">
            Edit Profile
            <hr>
          </h4>
          <b-alert
            show
            class="text-center"
            variant="warning"
            dismissible
            fade
          >
            <i class="fas fa-smile-wink"/>
            Add more information about yourself
          </b-alert>
          <b-tabs
            active-nav-item-class="font-weight-bold text-uppercase text-warning"
            active-tab-class="font-weight-bold"
            content-class="mt-3"
          >
            <b-tab title="General" active>
              <br>
              <user-details/>
            </b-tab>
            <b-tab title="Change password">
              <br>
              <change-password/>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-card-group>
    </b-container>
  </div>
</template>

<script>
  import UserDetails from './UserDetails';
  import ChangePassword from './ChangePassword';
  import UserApi from '@/services/userDetailsApi';

  export default {
    components: { UserDetails, ChangePassword },

    methods: {
      userInfo(id){
        UserApi.userInfo(this.form)
          .then(response => {
            self.response_key = response.id.result;
          });
      },
    }
  };
</script>
