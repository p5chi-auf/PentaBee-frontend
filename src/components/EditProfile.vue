<template>
  <div class="editProfile">
    <div no-body class="edit-card overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="12">
          <h3 class="text-center">
            <font-awesome-icon size="xs" icon="user-edit" />
            Edit Profile
            <hr >
          </h3>

          <div class="container">
            <div class="row">
              <div class="col-md-12 personal-info">
                <div class="alert alert-info alert-dismissable">
                  <a class="panel-close close" data-dismiss="alert">×</a>
                  <i class="fas fa-smile-wink"/>
                  Add more information about yourself
                </div>
                <h3>Personal info</h3>

                <form class="form-horizontal" role="form">
                  <div class="form-group">
                    <label class="control-label">First name:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="text" value="Evan"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Last name:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="text" value="You"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Company:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="text" value="Vue Technology LLC"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Email:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="text" value="e******@meteor.com"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Time Zone:</label>
                    <div class="col-lg-12">
                      <div class="ui-select">
                        <select id="user_time_zone" class="form-control">
                          <option value="Hawaii">(GMT-10:00) Hawaii</option>
                          <option value="Alaska">(GMT-09:00) Alaska</option>
                          <option value="Pacific Time (US &amp; Canada)">(GMT-08:00) Pacific Time (US &amp; Canada)</option>
                          <option value="Arizona">(GMT-07:00) Arizona</option>
                          <option value="Mountain Time (US &amp; Canada)">(GMT-07:00) Mountain Time (US &amp; Canada)</option>
                          <option value="Central Time (US &amp; Canada)" selected="selected">(GMT-06:00) Central Time (US &amp; Canada)</option>
                          <option value="Eastern Time (US &amp; Canada)">(GMT-05:00) Eastern Time (US &amp; Canada)</option>
                          <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Username:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="text" value="youyuxi"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Current Password:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="password" value="11122333"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">New Password:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="password" value="11sss111122333"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Confirm password:</label>
                    <div class="col-lg-12">
                      <b-input class="form-control" type="password" value="111sss11122333"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="control-label"/>
                    <div class="col-md-12">
                      <b-button pill variant="outline-warning">Save Changes</b-button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


