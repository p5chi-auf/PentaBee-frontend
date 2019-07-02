<template>
  <div class="profile home-content">
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-card
          border-variant="warning"
          header-tag="header"
          header-bg-variant="transparent"
          footer-border-variant="dark"
        >
          <h4 class="text-center">
            User Profile
            <hr>
          </h4>
          <b-col>
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
            <b-container>
              <b-tabs
                active-nav-item-class="font-weight-bold text-uppercase text-warning"
                active-tab-class="font-weight-bold"
                content-class="mt-3"
                class="row col-12"
              >
                <b-tab title="General" active>
                  <user-details/>
                </b-tab>
                <b-tab title="Change password">
                  <change-password/>
                </b-tab>
              </b-tabs>
            </b-container>
          </b-col>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import UserDetails from './UserDetails';
  import ChangePassword from './ChangePassword';
  import UserApi from '@/services/user/userDetailsApi';

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
