<template>
  <div class="activity-list">
    <div class="pt-2 mb-5 pb-5">
      <section class="SectionStyle">
        <b-container>
          <b-card class="mx-auto border-warning">
            <div class="row">
              <div class="col-md-3">
                <img src="../../assets/images/combs.jpg" class="round-image" alt="avatar"></div>
              <div class="col-md-9">
                <div class="row">
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

                <div>
                  <h5 class="font-weight-bold">Description: </h5>
                  <p class="ml-1 description-styles">{{ activity.description }}</p>
                </div>

                <div class="row">
                  <div class="col">
                    <h5 class="font-weight-bold">Technologies:</h5>

                    <ul v-for="item in activity.technologies" :key="item.id">
                      <li class="technology-name ml-3">{{ item.name }}</li>
                    </ul>
                  </div>

                  <div class="col">
                    <h5 class="font-weight-bold">Types:</h5>
                    <ul v-for="item in activity.types" :key="item.id">
                      <li class="technology-name ml-3">{{ item.name }}</li>
                    </ul>
                  </div>
                </div>

                <div class="row">
                  <h5 class="font-weight-bold col">Application till:
                    <p class="col-md-4 ml-4 application-deadline">
                      Date: {{ activity.application_deadline | formatDate }}
                    </p>
                    <p class="col-md-4  ml-4 application-deadline">
                      Time: {{ activity.application_deadline | formatTime }}</p>
                  </h5>

                  <h5 class="font-weight-bold col">
                    Activity deadline:
                    <p class="col-md-4 ml-4 deadline">Date: {{ activity.final_deadline | formatDate }}</p>
                    <p class="col-md-4 ml-4 deadline">Time: {{ activity.final_deadline | formatTime }}</p>
                  </h5>
                </div>

                <div class="text-center">
                  <b-link
                    v-if="userId === activity.owner.id"
                    v-b-tooltip.hover.top
                    title="Delete activity"
                    class="delete-icon float-right ml-2 mr-2"
                    @click="showDeleteModal"
                  >
                    <i class="fas fa-trash-alt"/>
                  </b-link>

                  <b-link
                    v-if="userId === activity.owner.id"
                    v-b-tooltip.hover.top
                    title="Edit activity"
                    class="edit-icon float-right ml-2 mr-2"
                    @click="setActivityEditId"
                  >
                    <i class="fas fa-edit"/>
                  </b-link>

                  <b-link
                    v-if="userId === activity.owner.id"
                    v-b-tooltip.hover.top
                    title="Invite users"
                    class="float-right ml-2 mr-2"
                    to="/invite"
                  >
                    <i class="fas fa-user-plus"/>
                  </b-link>

                  <b-link
                    v-if="userId !== activity.owner.id"
                    v-b-tooltip.hover.top
                    title="Apply"
                    class="apply-icon float-right ml-2 mr-2"
                    @click="showApplyModal"
                  >
                    <i class="fas fa-check-circle"/>
                  </b-link>
                </div>

                <modal
                  name="delete-activity"
                  transition="nice-modal-fade"
                  :min-width="100"
                  :min-height="100"
                  :max-width="300"
                  :max-height="200"
                  :delay="100"
                  :adaptive="true"
                >
                  <div class="example-modal-content text-center mt-5">
                    Do you want to delete activity?
                  </div>
                  <div class="row mt-5 ml-3">
                    <b-btn class="col-md-5" variant="dark" @click="cancel">Cancel</b-btn>
                    <b-btn class="col-md-5 ml-3" variant="warning" @click="deleteActivity()">Yes</b-btn>
                  </div>
                </modal>
                <modal
                  name="apply-activity"
                  transition="nice-modal-fade"
                  :min-width="100"
                  :min-height="100"
                  :max-width="300"
                  :max-height="200"
                  :delay="100"
                  :adaptive="true"
                >
                  <div class="example-modal-content text-center mt-5">
                    Do you want to apply for this activity?
                  </div>
                  <div class="row mt-5 ml-3">
                    <b-btn class="col-md-5" variant="dark" @click="cancel">Cancel</b-btn>
                    <b-btn class="col-md-5 ml-3" variant="warning" @click="apply(activity.id)">Apply</b-btn>
                  </div>
                </modal>
              </div>
            </div>
          </b-card>
        </b-container>
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
        this.$modal.hide('apply-activity');
        return 0
      },
      showApplyModal(){
        this.$modal.show('apply-activity');
      },
      setActivityEditId () {
        this.$router.push ({name: 'activityEdit', params: {activityEditId: this.activity.id}});
      },
      showDeleteModal(){
        this.$modal.show('delete-activity');
      },
      cancel () {
        this.$modal.hide('delete-activity');
        this.$modal.hide('apply-activity');
        return 0
      },
      deleteActivity() {
        ActivityService.deleteActivity(this.$route.params.activityId)
          .then(() => {
          alert('Deleted successful!');
          this.$router.push('/activity-list');
        })
      .catch (() => {
          alert ("You d'ont have permission")
        })
      },
    },
  };
</script>
