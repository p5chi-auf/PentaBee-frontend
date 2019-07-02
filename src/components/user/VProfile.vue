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
            <br>
            <div class="text-center space">
              <b-btn
                class="col-md-5 float-none d-inline-block btn btn-1"
                variant="warning"
                block
                pill
                @click="edit()"
              > Save Changes
              </b-btn>
            </div>
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
        edit() {
          UserApi.edit(this.form)
            .then(response => {
              self.response_key = response.id.result;
            });
          alert('Unauthorized');
          console.log(error.response.this.form);
        }
		}
  };
</script>
