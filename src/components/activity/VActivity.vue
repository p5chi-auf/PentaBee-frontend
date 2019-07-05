<template>
  <div class="pt-5">
    <b-card tag="article" class="mx-auto  col-md-11 ">
      <b-card-text class="project-name  text-left border border-warning">
        Project: {{Activity.name}}
      </b-card-text>
      
      <b-card-text class="border border-warning">
        About project: {{Activity.description}}
      </b-card-text>
      
      <div class="row">
        <div class="col">
          <b-card-text class="text-left border border-warning">
            Created at: {{Activity.created_at}}
          </b-card-text>
          
          <b-card-text class="text-left border border-warning">
            Uppdated at: {{Activity.updated_at}}
          </b-card-text>
          
          <b-card-text class="text-left border border-warning">
            Owner: {{ Activity.owner.id }}
          </b-card-text>
        </div>
        
        <div class="col">
          <b-card-text class="text-left border border-warning">
            Application till: {{Activity.application_deadline}}
          </b-card-text>
          
          <b-card-text class="text-left border border-warning">
            Activity deadline: {{Activity.final_deadline}}
          </b-card-text>
          
          <b-card-text v-for="item in Activity.technologies" v-bind:key="item.id"
                       class="text-left border border-warning">
            Technologies: {{item.id}}
          </b-card-text>
        </div>
      </div>
    </b-card>
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
      ActivityService.getActivityDetails (this.$route.params.id).then ((response) => {
        this.Activity = response.data;
      })
        .catch (error => {
          console.log (error)
        })
    },
  }

</script>

<style>
  .project-name {
    font-size: 26px;
    color: #fed900;
  }
</style>
