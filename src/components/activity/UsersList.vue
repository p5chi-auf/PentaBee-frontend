<template>
  <div class="activity-list">
    <div class="pt-2 mb-5 pb-5">
      <section class="section-style">
        <b-container>
          <b-card class="mx-auto border-warning">
            <h2 class="text-center mb-3">Invite users to your activity</h2>

            <b-list-group v-for="item in form.results" :key="item.id" class="mr-2">
              <b-list-group-item variant="warning">{{ item.username }}
                <b-link
                  v-b-tooltip.hover.top
                  title="Invite user"
                  class="apply-icon float-right"
                  @click="userInvite(item.id)"
                >
                  <i class="float-right far fa-check-circle"/>
                </b-link>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-container>
      </section>
      <div class="d-flex justify-content-center">
        <b-pagination
          v-model="form.currentPage"
          bg-variant="dark"
          :total-rows="form.numResults"
          :per-page="form.perPage"
          aria-controls="my-table"
          @input="getUsersList"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import ActivityService from '@/services/activityApi';

  export default {
    data: () => ({
      form: {
        results: [],
        currentPage: 1,
        perPage: 10
      }
    }),
    mounted() {
      this.getUsersList()
    },
    methods: {
      getUsersList(){
        let data =  '?pagination[page]=' + this.form.currentPage + '&pagination[per_page]=' + this.form.per_page;
        UserApi.userList(data)
          .then((response) => {
            this.form = response.data
          })
      },
      userInvite(id) {
        ActivityService.inviteUser(this.$route.params.activityId, id)
          .then(() => {
            this.$toast.open({
              message: 'User invited with success!',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            })
          })
          .catch((error) => {
            let message = error.response.data.message;

            this.$toast.open({
              message: message,
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            })
          })
      }
    }
  }
</script>
