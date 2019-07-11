<template>
  <div class="pt-5 pb-5 ">
    <section class="SectionStyle">
      <b-card class="  col-md-11 mx-auto border-warning">
        <div class="row">
          <div class="col-md-3">
            <img src="../../assets/images/combs.jpg" class="round-image" alt="avatar"></div>
          <div class="col-md-9">
            <div class="row">
              <b-card-title class="col-md-8 mx-auto">
                Project: {{ Activity.name }} lorem20
              </b-card-title>
              <b-card-text class="col-md-4 text-right">
                {{ Activity.owner.name +' ' + Activity.owner.surname }}
                <img src="../../assets/images/user-image.png" class="user-image">
              </b-card-text>
            </div>
            <hr class="border line">
            <h5 class="row ml-2">
              About project: {{ Activity.description }}
            </h5>
            <div class="row ml-2">
              <h5 class="">Technologies:</h5>
              <b-list-group v-for="item in Activity.technologies" :key="item.id" >
                <p-card-text class="technology-name col">{{ item.name }}</p-card-text>
              </b-list-group>
            </div>
            
            <h5 class="row ml-2">Application till: Date  {{ Activity.application_deadline | formatDate }}
              Time{{ Activity.application_deadline | formatTime }}</h5>
            <h5 class="row ml-2">
              Activity deadline: Date {{ Activity.final_deadline | formatDate }} Time
              {{ Activity.final_deadline | formatTime }}
            </h5>
            <b-button class="btn-primary col-md-4 " @click="deleteActivity"> delete activity</b-button>
            <b-button class="btn-primary col-md-4 " to="/activityCreate"> Create activity</b-button>
          </div>
          
        </div>
      </b-card>
    </section>
  </div>
</template>

<script>
  import ActivityService from '../../services/ActivityApi';

  export default {

    data () {
      return {
        Activity: {
          owner:[]
        },
        ActivityAvatar:{
          avatar: 'pentabee.png'
        }
      }
    },

    created () {
      ActivityService.getActivityDetails (this.$route.params.ActivityId).then ((response) => {
        this.Activity = response.data;
      })
        .catch (error => {
          console.log (error)
        })
    },
    methods: {
      deleteActivity () {
        ActivityService.deleteActivity (this.$route.params.ActivityId).then ((response) => {
          alert ('deleted successful!!!!');
          this.$router.push('/')
        }).catch (error => {
            alert ("You d'ont have permission")
          })
      }

    }
  }

</script>

<style>
  .technology-name {
    font-size: 20px;
  }
  
  .SectionStyle .card{
    border-radius: 15px;
    box-shadow: 5px 5px 5px #ffda00;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }
  .SectionStyle .card:hover {
    border-radius: 20px;
    box-shadow: 5px 5px 10px #9e9e9e;
  }
  
  .line{
    padding: 1px;
    background-image: linear-gradient(to right, #fff68d 0%, #ffda00, #fff68d 100%);
  }
  .round-image{
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
  .user-image{
     border-radius: 50%;
    height: 40px;
    width: 60px;
  }

</style>
