<template>
  <div class="activity-list">
    <div class="pt-5 pb-5 pl-1">
      <section class="SectionStyle">
        <b-card class="col-md-11 mx-auto border-warning">
          <div class="row">
            <div class="col-md-3">
              <img src="../../assets/images/combs.jpg" class="round-image" alt="avatar"></div>
            <div class="col-md-9">
              <div class="row">
                <b-card-title class="col-md-8 mx-auto row">
                  {{ activity.name }}
                </b-card-title>

                <b-card-text class="col-md-4 text-right text-capitalize">
                  {{ activity.owner.name + ' ' + activity.owner.surname }}
                  <img src="../../assets/images/user-image.png" class="user-image" alt="">
                </b-card-text>
              </div>
              <hr class="line">

              <div class="ml-2">
                <h5 class="font-weight-bold">Description: </h5>
                <p class="ml-4 description-styles">{{ activity.description }}</p>
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

              <h5 class="ml-4 font-weight-bold">Application till:
                <p class="col-md-4 ml-3 aplication-deadline">
                  Date: {{ activity.application_deadline | formatDate }}
                </p>
                <p class="col-md-4 ml-3 aplication-deadline">Time: {{ activity.application_deadline | formatTime }}</p>
              </h5>

              <h5 class="ml-5 font-weight-bold">
                Activity deadline:
                <p class="col-md-4 ml-4 deadline">Date: {{ activity.final_deadline | formatDate }}</p>
                <p class="col-md-4 ml-4 deadline">Time: {{ activity.final_deadline | formatTime }}</p>
              </h5>

              <b-button
                v-if="userId === activity.owner.id"
                class="btn-danger col-md-2 float-right"
                @click="deleteActivity"
              >
                Delete activity
              </b-button>
              <b-btn
                variant="warning"
                class="btn btn-1 col-4"
                block
                pill
                @click="apply(activity.id)"
              >Apply
              </b-btn>
              <users-list/>
            </div>
          </div>
        </b-card>
      </section>
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import { mapState, mapGetters } from 'vuex';
  import UsersList from '../user/UsersList';

  export default {
    components: { UsersList },
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
          }).catch(error => {
          this.$toast.open({
            message: 'Activity is already finished or application deadline passed!',
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
      setApplicants() {
        ActivityService.inviteUser(this.$route.params.activityId);
      },
    },
  };
</script>
