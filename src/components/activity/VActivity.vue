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
                {{ Activity.name }}
              </b-card-title>
              
              <b-card-text class="col-md-4 text-right">
                {{ Activity.owner.name +' ' + Activity.owner.surname }}
                <img src="../../assets/images/user-image.png" class="user-image">
              </b-card-text>
            </div>
            <hr class="border line">
            
            <div class="ml-2">
              <h5 class="font-weight-bold">Description: </h5>
              <p class="ml-4 description-styles">{{ Activity.description }}</p>
            </div>
            
            <div class="ml-1 row">
              <div class="col-md-5">
                <h5 class="font-weight-bold">Technologies:</h5>
                
                <ul v-for="item in Activity.technologies" :key="item.id">
                  <li class="technology-name ml-lg-5">{{ item.name }}</li>
                </ul>
              </div>
              
              <div class="col-md-5">
                <h5 class="font-weight-bold">Types:</h5>
                <ul v-for="item in Activity.types" :key="item.id">
                  <li class="technology-name ml-lg-5">{{ item.name }}</li>
                </ul>
              </div>
            </div>
            
            <h5 class="ml-4 font-weight-bold">Application till:
              <p class="col-md-4 ml-3 aplication-deadline">
                Date: {{ Activity.application_deadline | formatDate }}
              </p>
              <p class="col-md-4 ml-3 aplication-deadline">Time: {{ Activity.application_deadline | formatTime }}</p>
            </h5>
           
            <h5 class="ml-5 font-weight-bold">
              Activity deadline:
              <p class="col-md-4 ml-4 deadline">Date: {{ Activity.final_deadline | formatDate }}</p>
              <p class="col-md-4 ml-4 deadline">Time: {{ Activity.final_deadline | formatTime }}</p>
            </h5>
            
            <b-button
              v-if="idUser == Activity.owner.id"
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
  import CommonServices from '../../services/Services'

  export default {

    data () {
      return {
        Activity: {
          owner: []
        },
        idUser: null
      }
    },

    created () {
      ActivityService.getActivityDetails (this.$route.params.ActivityId).then ((response) => {
        this.Activity = response.data;
        this.idUser = CommonServices.idUser;


      })
        .catch (error => {
          console.log (error)
        })
    },
    methods: {
      deleteActivity () {
        ActivityService.deleteActivity (this.$route.params.ActivityId).then ((response) => {
          alert ('deleted successful!!!!');
          this.$router.push ('/ActivityList')
        }).catch (error => {
          alert ("You d'ont have permission")
        })
      }

    }
  }

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
