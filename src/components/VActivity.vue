<template>
  <div class="divv-padding">
    <b-card tag="article" class="mx-auto col-md-11 ">
      <b-card-text class="project-name">
        Project: {{this.activities.name}}
      </b-card-text>
      
      <b-card-text>
        About project: {{this.activities.description}}
      </b-card-text>
      
      <div class="row">
        <div class="col">
          <b-card-text class="text-left">
            Created at: {{this.activities.created_at}}
          </b-card-text>
          <b-card-text class="text-left">
            Uppdated at: {{this.activities.updated_at}}
          </b-card-text>
  
          <b-card-text class="text-left">
            Owner: {{ this.owner.id }}
          </b-card-text>
        </div>
        
        <div class="col">
          <b-card-text class="text-right">
            Application till: {{this.activities.application_deadline}}
          </b-card-text>
          
          <b-card-text class="text-right">
            Activity deadline: {{this.activities.final_deadline}}
          </b-card-text>
  
          <b-card-text class="text-right">
            Technologies: {{this.technologies.id}}
          </b-card-text>
        </div>
      </div>
      <b-button variant="primary" @click="created()">Get activity</b-button>
    </b-card>
  </div>
</template>

<script>
  import ActivityService from '../services/ActivityApi';
  export default {
    data () {
      return {
       activities:{
         id: this.$route.params.id,
         name: 'Penta Bee',
         description: '',
         application_deadline: '',
         final_deadline: '',
         status: '',
       },
         owner: {
           id: ''
         },
         created_at: '',
         updated_at: '',
         technologies: [{
           id: ''
         }],
         types: [{
           id: ''
         }],
         public: true,
       
      }

    },
    methods:{
      created (){
       ActivityService.activity(this.activities).then((response) => {
         console.log (response.this.activities); console.log(this.loggedIn)
       })
      },
      register () {
        RegisterService.register (this.requestBody).then ((response) => {
          console.log (response.this.requestBody);
        }).catch ((error) => {
          console.log (error.response.this.requestBody);
        });
      }
    }
    
  }
</script>
<style >
  .divv-padding {
    padding-top: 10px;
  }
  
  .project-name {
    font-size: 26px;
    color: #fed900;
  }
</style>
