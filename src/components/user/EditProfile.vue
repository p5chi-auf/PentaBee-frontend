<template>
  <div class="profile home-content">
    <b-container>
      <b-card
        border-variant="warning"
        header-tag="header"
        header-bg-variant="transparent"
        footer-border-variant="dark"
      >
        <h4 class="text-center">Edit Profile</h4>
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
                <v-general-vue/>
              </b-tab>
              <b-tab title="Social">
                <v-social-vue/>
              </b-tab>
              <b-tab title="Change password">
                <v-change-password-vue/>
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
  import VGeneralVue from './VGeneral';
  import VSocialVue from './VSocial';
  import VChangePasswordVue from './VChangePassword';
  export default {
    components: { VSocialVue, VGeneralVue,VChangePasswordVue },
  };
</script>
