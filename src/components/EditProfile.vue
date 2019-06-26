<template>
  <div class="editProfile">
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="12">
          <b-card-body>
            <h3 class="text-center">
              <font-awesome-icon size="xs" icon="user-edit" />
              Edit Profile
              <hr >
            </h3>

            <b-form inline>
              <b-button variant="primary">Save</b-button>
            </b-form>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<style scoped>
.editProfile {
  padding: 15px;
}
</style>

