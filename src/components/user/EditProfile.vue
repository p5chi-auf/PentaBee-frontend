<template>
  <div class="edit">
    <div class="profileCard home-content">
      <section id="card-outline">
        <b-container>
          <b-card-group deck>
            <b-card
              border-variant="warning"
              header-bg-variant="transparent"
              align="center"
            >
              <h4 class="text-center">
                Edit Profile
                <hr class="line">
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
                <b-tab title="Delete account">
                  <br>
                  <delete-profile/>
                </b-tab>
              </b-tabs>
            </b-card>
          </b-card-group>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
  import UserDetails from './UserDetails';
  import ChangePassword from './ChangePassword';
  import DeleteProfile from './DeleteProfile';

  export default {
    components: {
      UserDetails,
      ChangePassword,
      DeleteProfile
    }
  };
</script>
