<template>
  <div class="pt-2 mb-5 pb-5">
    <section class="SectionStyle">
      <b-container>
        <b-card class="mx-auto border-warning">
          <div class="row">
            <div class="col-md-3">
              <img :src="avatarActivityUrl" class="round-image" alt="avatar"></div>
            <div class="col-md-9">
              <div class="row">
                <b-card-title class="col-md-8 mx-auto row">
                  {{ activity.name }}
                </b-card-title>
                <b-card-text class="col-md-4 text-right text-capitalize">
                  {{ activity.owner.name +' ' + activity.owner.surname }}
                  <img src="../../assets/images/user-image.png" class="user-image" alt="">
                </b-card-text>
              </div>
              
              <hr class="border line">
              
              <b-alert show class="text-center" variant="warning" dismissible fade>
                <i class="fas fa-smile-wink"/>
                All about activity
              </b-alert>
              
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
                  <p class="col-md-4 ml-4 application-deadline">Time: {{ activity.application_deadline | formatTime
                  }}</p>
                </h5>
                
                <h5 class="font-weight-bold col">
                  Activity deadline:
                  <p class="col-md-4 ml-4 deadline">Date: {{ activity.final_deadline | formatDate }}</p>
                  <p class="col-md-4 ml-4 deadline">Time: {{ activity.final_deadline | formatTime }}</p>
                </h5>
              </div>
              <b-btn
                v-if="userId !== activity.owner.id"
                variant="warning"
                class="btn btn-1 col-3"
                pill
                @click="apply(activity.id)"
              >
                Apply
              </b-btn>
              
              <b-btn variant="warning" class="btn btn-1 col-3" pill to="/invite"> Invite</b-btn>
              
              <i class="fas fa-users applicants-icon-button" @click="redirectToActivityApplicants(activity.id)"/>
              
              <b-btn
                v-if="userId===activity.owner.id"
                class="btn-danger col-md-3 float-right ml-2 mr-2"
                @click="showDeleteModal"
              >
                Delete activity
              </b-btn>
              
              <b-btn
                v-if="userId===activity.owner.id"
                class="btn-success col-md-3 float-right ml-2 mr-2"
                @click="setActivityEditId"
              >
                Edit activity
              </b-btn>
              
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
                <div class="example-modal-content text-center mt-5">Do you want to delete activity?</div>
                
                <div class="row mt-5 ml-3">
                  <b-button class="col-md-5" variant="dark" @click="cancel">Cancel</b-button>
                  <b-button class="col-md-5 ml-3" variant="warning" @click="deleteActivity()">Yes</b-button>
                </div>
              </modal>
            </div>
          </div>
        </b-card>
      </b-container>
    </section>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import {mapState, mapGetters} from 'vuex';

  export default {
    data () {
      return {
        activity: {
          owner: {
            avatar: {}
          }
        },
        delete: false,
        avatarActivityUrl: null
      }
    },

    computed: {
      ...mapState ('account', ['user', 'setUser']),
      ...mapGetters ('account', ['userId']),
    },
    mounted () {
      ActivityService.getActivityDetails (this.$route.params.activityId).then ((response) => {
        this.activity = response.data;
        if (this.activity.owner.avatar) {
          this.avatarActivityUrl = 'http://api.pentabee.local/' + this.activity.owner.avatar.original;
        } else {
          this.avatarActivityUrl = '/img/combs.jpg'
        }
      })
        .catch (error => {
          console.log (error)
        });

    },
    methods: {
      redirectToActivityApplicants (id) {
        this.$router.push ({name: 'applicantsList', params: {idActivity: id}});
      },
      showDeleteModal () {
        this.$modal.show ('delete-activity');
      },
      cancel () {
        this.$modal.hide ('delete-activity');
        return 0
      },
      apply (id) {
        ActivityService.applyActivity (id).then (() => {
          this.$toast.open ({
            message: 'You\'ve successfully applied to activity!',
            type: 'success',
            position: 'top-right',
            duration: 3000,
            dismissible: true,
          });
        })
      },

      setActivityEditId () {
        this.$router.push ({name: 'activityEdit', params: {activityEditId: this.activity.id}});
      },
      deleteActivity () {
        ActivityService.deleteActivity (this.$route.params.activityId).then (() => {
          this.$router.push ('/activity-list')
        }).catch (() => {
          alert ("You d'ont have permission")
        })
      }
    }
  }
</script>

<style>
  .applicants-icon-button {
    font-size: 30px;
    cursor: pointer;
  }
  
  .technology-name {
    font-size: initial;
  }
  
  .SectionStyle .card {
    border-radius: 15px;
    box-shadow: 5px 5px 5px #ffda00;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }
  
  .description-styles {
    text-indent: 2em;
    font-weight: initial;
  }
  
  .SectionStyle .card:hover {
    border-radius: 20px;
    box-shadow: 5px 5px 10px #9e9e9e;
  }
  
  .line {
    padding: 1px;
    background-image: linear-gradient(to right, #fff68d 0%, #ffda00, #fff68d 100%);
  }
  
  .round-image {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
  
  .user-image {
    border-radius: 50%;
    height: 40px;
    width: 60px;
  }
  
  .application-deadline {
    color: #006b00;
    font-size: initial;
    padding: 0;
  }
  
  .deadline {
    color: red;
    font-size: initial;
    padding: 0;
  }
</style>
