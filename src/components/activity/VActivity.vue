<template>
  <div class="pt-5">
    <b-card tag="article" class="mx-auto  col-md-11 ">
      <b-card-text class="project-name  text-left border border-warning">
        Project: {{ActivityDetails.name}}
      </b-card-text>
      
      <b-card-text class="border border-warning">
        About project: {{ActivityDetails.description}}
      </b-card-text>
      
      <div class="row">
        <div class="col">
          <b-card-text class="text-left border border-warning">
            Created at: {{ActivityDetails.created_at}}
          </b-card-text>
          <b-card-text class="text-left border border-warning">
            Uppdated at: {{ActivityDetails.updated_at}}
          </b-card-text>
          
          <b-card-text class="text-left border border-warning">
            Owner: {{ ActivityDetails.owner.id }}
          </b-card-text>
        </div>
        
        <div class="col">
          <b-card-text class="text-left border border-warning">
            Application till: {{ActivityDetails.application_deadline}}
          </b-card-text>
          
          <b-card-text class="text-left border border-warning">
            Activity deadline: {{ActivityDetails.final_deadline}}
          </b-card-text>
          
          <b-card-text class="text-left border border-warning">
            Technologies: {{ActivityDetails.technologies.id}}
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
        ActivityDetails: {
          id: null,
          name: '',
          description: '',
          application_deadline: '',
          final_deadline: '',
          status: '',
          owner: {
            id: null
          },
          created_at: '',
          updated_at: '',
          technologies: [{
            id: null
          }],
          types: [{
            id: null
          }],
          public: true,
        }

      }

    },
      created () {
        let idActivity = localStorage.getItem('idActivity');
        ActivityService.getActivityDetails(idActivity).then ((response) => {
          console.log (response);
          this.ActivityDetails = response.data;
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
