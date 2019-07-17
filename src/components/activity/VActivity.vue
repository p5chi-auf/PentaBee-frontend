<template>
  <div class="pt-5 pb-5">
    <section class="SectionStyle">
      <b-card class="  col-md-11 mx-auto border-warning">
        <div class="row">
          <div class="col-md-3">
            <img src="../../assets/images/combs.jpg" class="round-image" alt="avatar"></div>
          <div class="col-md-9">
            <div class="row">
              <b-card-title class="col-md-8 mx-auto row">
                {{ activity.name }}
              </b-card-title>

              <b-card-text class="col-md-4 text-right" style="text-transform:capitalize">
                {{ activity.owner.name +' ' + activity.owner.surname }}
                <img src="../../assets/images/user-image.png" class="user-image" alt="">
              </b-card-text>
            </div>
            <hr class="border line">

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
              v-if="idUser == activity.owner.id"
              class="btn-danger col-md-2 float-right"
              @click="deleteActivity"
            >
              Delete activity
            </b-button>
          </div>
        </div>
      </b-card>
    </section>
  </div>
</template>

<script>
  import ActivityService from '../../services/ActivityApi';
  import CommonServices from '../../services/services'

  export default {

    data () {
      return {
        activity: {
          owner: {}
        },
        idUser: null
      }
    },

    created () {
      ActivityService.getActivityDetails (this.$route.params.activityId).then ((response) => {
        this.activity = response.data;
        this.idUser = CommonServices.idUser;
      })
        .catch (error => {
          console.log (error)
        })
    },
    methods: {
      deleteActivity () {
        ActivityService.deleteActivity (this.$route.params.activityId).then ((response) => {
          alert ('deleted successful!!!!');
          this.$router.push ('/activity-list')
        }).catch (error => {
          alert ("You d'ont have permission")
        })
      }

    }
  };
</script>

<style>
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

  .aplication-deadline {
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
