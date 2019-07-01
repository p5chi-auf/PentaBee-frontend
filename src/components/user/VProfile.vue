<template>
  <div class="profile home-content">
    <b-container>
      <b-card
        border-variant="warning"
        header-tag="header"
        header-bg-variant="transparent"
        footer-border-variant="dark"
      >
        <h4 class="text-center">Profile</h4>
        <b-col>
          <b-alert show class="text-center" variant="warning" dismissible fade>
            <i class="fas fa-smile-wink"/>
            Add more information about yourself
          </b-alert>
          <b-container class="row">
            <b-tabs active-nav-item-class="font-weight-bold text-uppercase text-warning"
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
          <br>
          <div class="text-center space">
            <b-btn
              class="col-md-5 float-none d-inline-block btn btn-1"
              variant="warning"
              block
              pill
            >Save Changes
            </b-btn>
          </div>
        </b-col>
      </b-card>
    </b-container>
  </div>
</template>

<script>
  import UserDetails from './UserDetails';
  import ChangePassword from './ChangePassword';

  export default {
    components: { UserDetails,ChangePassword},
  };
</script>
