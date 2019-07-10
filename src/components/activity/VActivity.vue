<template>
  <div class="pt-5 pb-5 ">
    <section >
      <b-card class="mx-auto  col-md-11 border-warning">
        <h1 class="project-name  text-center mx-auto">
          Project: {{ Activity.name }}
        </h1>
        <hr class="border line">
      
        <b-card-text class="text-center">
          About project: {{ Activity.description }}
        </b-card-text>
      
        <div class="row">
          <div class="col">
            <b-card-text class="text-left">
              Owner: {{ Activity.owner.name +' ' + Activity.owner.surname }}
            </b-card-text>
            <b-card-text class="text-left">
              Created at: {{ Activity.created_at }}
            </b-card-text>
          
            <b-card-text class="text-left">
              Uppdated at: {{ Activity.updated_at }}
            </b-card-text>
          </div>
          <div class="text left col">
            <div class="row">
              <h5 class="">Technologies:</h5>
              <b-list-group v-for="item in Activity.technologies" :key="item.id" horizontal>
                <p-card-text class=" col">{{ item.name }}</p-card-text>
              </b-list-group>
            </div>
            <b-card-text class="">
              Application till: {{ Activity.application_deadline }}
            </b-card-text>
          
            <b-card-text class="">
              Activity deadline: {{ Activity.final_deadline }}
            </b-card-text>
          </div>
        </div>
        <b-button class="btn-primary" @click="deleteActivity"> delete activity</b-button>
      </b-card>
    </section>
  </div>
</template>

<script>
  import ActivityService from '../../services/ActivityApi';

  export default {

    data () {
      return {
        Activity: {}
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
  .project-name {
    color: #fed900;
    text-shadow: 2px 2px 4px #e5d899;
    position: relative;
  }
  
  .line {
    padding: 2px;
    background-image: linear-gradient(to right, gray, #000000, gray);
    
  }

</style>
