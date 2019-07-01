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
                    active-tab-class="font-weight-bold text-warning"
                    content-class="mt-3"
                    class="row col-12"
            >
              <b-tab title="General" active/>
              <br><br>
            </b-tabs>
          </b-container>
          <h6 class="text-left" style="color: #2d2d2d;">General</h6>
          <h6 class="text-left">Setup your general profile details.</h6><br>
          <b-form class="row">
            <b-form-group
              class="col-md-6"
              label="First Name"
            >
              <b-form-input
                type="text"
                class="form-control"
              />
            </b-form-group>

            <b-form-group
              class="col-md-6"
              label="Last Name"
            >
              <b-form-input
                type="text"
                class="form-control"
              />

            </b-form-group>

            <b-form-group
              class="col-md-6"
              label="Location"
            >
              <b-form-input
                type="text"
                class="form-control"
              />
            </b-form-group>
            <b-form-group
              class="col-md-6"
              label="Position"
            >
              <b-form-input
                type="text"
                class="form-control"
              />
            </b-form-group>
            <b-form-group
              class="col-md-6"
              label="Email"
            >
              <b-form-input
                type="text"
                class="form-control"
              />
            </b-form-group>
            <b-form-group
              class="col-md-6"
              label="Seniority"
            >
              <b-form-input
                type="text"
                class="form-control"
              />
            </b-form-group>

          </b-form>

          <br>
          <hr>
          <h6 class="text-left" style="color: #2d2d2d;">Social</h6>
          <h6 class="text-left">Setup your social profiles info.</h6><br>
          <b-form class="row">
            <b-input-group
              class="col-md-3"
            >
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fab fa-facebook-f"/></span>
              </b-input-group-prepend>
              <b-form-input size="xs"/>
            </b-input-group>

            <b-input-group
              class="col-md-3"
            >
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fab fa-twitter"/></span>
              </b-input-group-prepend>
              <b-form-input size="xs"/>
            </b-input-group>
            <b-input-group
              class="col-md-3"
            >
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fab fa-github"/></span>
              </b-input-group-prepend>
              <b-form-input size="xs"/>
            </b-input-group>

            <b-input-group
              class="col-md-3"
            >
              <b-input-group-prepend>
                <span class="input-group-text"><i class="fab fa-slack-hash"/></span>
              </b-input-group-prepend>
              <b-form-input size="xs"/>
            </b-input-group>
          </b-form>
          <br>
          <hr>
          <h6 class="text-left" style="color: #2d2d2d;">Change Password</h6>
          <h6 class="text-left">Change your current password.</h6><br>
          <b-form class="row">
            <b-form-group
              class="col-md-3"
              label="Old Password"
            >
              <b-form-input
                type="password"
                class="form-control"
              />
            </b-form-group>

            <b-form-group
              class="col-md-3"
              label="New Password"
            >
              <b-form-input
                type="password"
                class="form-control"
              />

            </b-form-group>

            <b-form-group
              class="col-md-3"
              label="Repeat New Password"
            >
              <b-form-input
                type="password"
                class="form-control"
              />
            </b-form-group>
          </b-form>

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

