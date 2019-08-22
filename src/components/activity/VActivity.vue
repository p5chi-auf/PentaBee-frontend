<template>
  <div class="activity-list">
    <div class="pt-2 mb-5 pb-5">
      <section class="tab-section">
        <b-container>
          <b-card class="mx-auto border-warning">
            <div class="row">
              <div class="col-md-3">
                <img :src="avatarActivityUrl" class="round-image" alt="avatar">
              </div>

              <div class="col-md-9">
                <div class="row">
                  <b-card-title class="col-md-8 mx-auto row">
                    {{ activity.name }}
                  </b-card-title>

                  <b-card-text class="col-md-4 text-right text-capitalize">
                    <div class="image-in-container">
                      <img
                        v-b-tooltip.hover
                        :title="activity.owner.name + ' ' + activity.owner.surname"
                        :src="ownerImageAvatarUrl"
                        alt="avatar"
                      >
                    </div>
                  </b-card-text>
                </div>

                <hr class="line">
                <p>{{ activity.status }}</p>
                <h5 class="font-weight-bold">Description: </h5>

                <p class="ml-1 description-styles">{{ activity.description }}</p>

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
                  <h5 class="font-weight-bold col">
                    Application till:
                    <p class="col-md-4 ml-4 application-deadline">
                      Date: {{ activity.application_deadline | formatDate }}
                    </p>
                    <p class="col-md-4  ml-4 application-deadline">
                      Time: {{ activity.application_deadline | formatTime }}
                    </p>
                  </h5>

                  <h5 class="font-weight-bold col">
                    Activity deadline:
                    <p class="col-md-4 ml-4 deadline">
                      Date: {{ activity.final_deadline | formatDate }}
                    </p>
                    <p class="col-md-4 ml-4 deadline">
                      Time: {{ activity.final_deadline | formatTime }}
                    </p>
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
                    class="invite-icon float-right ml-2 mr-2"
                    @click="invite"
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

                  <b-link
                    v-b-tooltip.hover.top
                    title="Users list"
                    class="applicants-icon float-right ml-2 mr-2"
                    @click="redirectToActivityApplicants(activity.id)"
                  >
                    <i class="fas fa-users"/>
                  </b-link>

                  <b-link
                    v-b-tooltip.hover.top
                    title="Comments"
                    class="float-right ml-2 mr-2"
                    @click="showComments = !showComments"
                  >
                    <i class="fas fa-comments"/>
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
                    Do you want to apply to this activity?
                  </div>
                  <div class="row mt-5 ml-3">
                    <b-btn class="col-md-5" variant="dark" @click="cancel">Cancel</b-btn>
                    <b-btn class="col-md-5 ml-3" variant="warning" @click="apply(activity.id)">Apply</b-btn>
                  </div>
                </modal>
              </div>
            </div>
            <comments-activity v-if="showComments === true" class="mt-4"/>
          </b-card>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import { mapState, mapGetters } from 'vuex';
  import { basePath } from '../../constants/apiEndpoints';
  import CommentsActivity from '../comments/CommentsActivity';

  export default {
    components:{
      CommentsActivity: CommentsActivity
    },
    data() {
      return {
        activity: {
          owner: {
            avatar: {},
          },
          cover: {},
        },
        delete: false,
        avatarActivityUrl: null,
        ownerImageAvatarUrl: null,
        showComments: false
      }
    },
    computed: {
      ...mapState('account', ['user', 'setUser']),
      ...mapGetters('account', ['userId'])
    },
    created() {
      ActivityService.getActivityDetails(this.$route.params.activityId)
        .then((response) => {
          this.activity = response.data
        })
    },
    mounted() {
      ActivityService.getActivityDetails(this.$route.params.activityId)
        .then(response => {
          this.activity = response.data;

          if (this.activity.cover) {
            this.avatarActivityUrl = basePath + '/' + this.activity.cover['150x150']
          } else {
            this.avatarActivityUrl = '/img/combs.jpg'
          }

          if (this.activity.owner.avatar) {
            this.ownerImageAvatarUrl = basePath + '/' + this.activity.owner.avatar['40x40']
          } else {
            this.ownerImageAvatarUrl = '/img/person1.png'
          }
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
              dismissible: true
            })
          })
          .catch(error => {
            this.$toast.open({
              message: error.response.data.message,
              type: 'error',
              position: 'top-right',
              duration: 4000,
              dismissible: true
            })
          });
        this.$modal.hide('apply-activity');
        return 0
      },
      redirectToActivityApplicants(id) {
        this.$router.push({ name: 'applicantsList', params: { idActivity: id } })
      },
      showApplyModal() {
        this.$modal.show('apply-activity')
      },
      invite() {
        this.$router.push({ name: 'invite', params: { activityEditId: this.activity.id } })
      },
      setActivityEditId() {
        this.$router.push({ name: 'activityEdit', params: { activityEditId: this.activity.id } })
      },
      showDeleteModal() {
        this.$modal.show('delete-activity')
      },
      cancel() {
        this.$modal.hide('delete-activity');
        this.$modal.hide('apply-activity');

        return 0
      },
      deleteActivity() {
        ActivityService.deleteActivity(this.$route.params.activityId)
          .then(() => {
            this.$toast.open({
              message: 'The activity was successfully deleted!',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            });

            this.$router.push('/activity-list/:filter')
          })
          .catch(() => {
            this.$toast.open({
              message: 'You d\'ont have permission',
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
