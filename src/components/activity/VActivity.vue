<template>
  <div class="activity-list">
    <div class="pt-5 pb-5 pl-2">
      <section class="SectionStyle">
        <b-card class="col-12 mx-auto border-warning">
          <div class="row">
            <div class="col-md-3">
              <img src="../../assets/images/combs.jpg" class="round-image" alt="avatar">
            </div>
            <div class="col-md-9">
              <div class="ml-1 row">
                <b-card-title class="col-md-8 mx-auto row">
                  {{ activity.name }}
                </b-card-title>

                <b-card-text class="col-md-4 text-right text-capitalize">
                  <img v-b-tooltip.hover :title="activity.owner.name + ' ' + activity.owner.surname"
                       src="../../assets/images/user-image.png" class="user-image" alt="avatar"
                  >
                </b-card-text>
              </div>
              <hr class="line">

              <div class="ml-2">
                <h5 class="font-weight-bold">Description: </h5>
                <p class="ml-3 description-styles">{{ activity.description }}</p>
              </div>

              <div class="ml-1 row">
                <div class="col-md-5">
                  <h5 class="font-weight-bold">Technologies:</h5>

                  <ul v-for="item in activity.technologies" :key="item.id">
                    <li class="technology-name ml-lg-5">{{ item.name }}</li>
                  </ul>
                </div>

                <div class="col-md-5">
                  <h5 class="font-weight-bold">Types:</h5>
                  <ul v-for="item in activity.types" :key="item.id">
                    <li class="technology-name ml-lg-5">{{ item.name }}</li>
                  </ul>
                </div>
              </div>

              <h5 class="ml-4 font-weight-bold">
                Application till:
                <p class="col-md-4 ml-3 application-deadline">Date: {{ activity.application_deadline | formatDate }}</p>
                <p class="col-md-4 ml-3 application-deadline">Time: {{ activity.application_deadline | formatTime }}</p>
              </h5>

              <h5 class="ml-4 font-weight-bold">
                Activity deadline:
                <p class="col-md-4 ml-3 deadline">Date: {{ activity.final_deadline | formatDate }}</p>
                <p class="col-md-4 ml-3 deadline">Time: {{ activity.final_deadline | formatTime }}</p>
              </h5>
            </div>
          </div>

          <div class="text-center">
            <b-btn
              v-if="userId !== activity.owner.id"
              variant="warning"
              class="btn btn-1 col-3"
              pill
              @click="apply(activity.id)"
            >
              Apply
            </b-btn>
            <b-btn
              variant="warning"
              class="btn btn-1 col-3"
              pill
              to="/invite"
            >
              Invite
            </b-btn>

            <b-btn
              variant="warning"
              class="btn btn-1 col-3"
              pill
            >
              Edit
            </b-btn>

            <b-btn
              v-if="userId === activity.owner.id"
              variant="warning"
              class="btn btn-1 col-3 btn-delete"
              pill
              @click="deleteActivity"
            >
              Delete activity
            </b-btn>
          </div>
        </b-card>
      </section>
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import { mapState, mapGetters } from 'vuex';

  export default {
    data() {
      return {
        activity: {
          owner: {},
        },
      };
    },
    computed: {
      ...mapState('account', ['user', 'setUser']),
      ...mapGetters('account', ['userId']),
    },
    created() {
      ActivityService.getActivityDetails(this.$route.params.activityId).then((response) => {
        this.activity = response.data;
      })
        .catch(error => {
          console.log(error);
        });
    },
    methods: {
      apply(id) {
        ActivityService.applyActivity(id)
          .then(() => {
            this.$toast.open({
              message: 'You\'ve successfully applied!',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => {
            let message = error.response.data.message;
            this.$toast.open({
              message: message,
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });
          });
      },
      deleteActivity() {
        ActivityService.deleteActivity(this.$route.params.activityId).then(() => {
          alert('Deleted successful!');
          this.$router.push('/activity-list');
        });
      },
    },
  };
</script>
