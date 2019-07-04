<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Disponibile" active>
          <b-card-group deck >
            <b-card v-for="result in this.results" v-bind:key = "result.id" bg-variant="light" border-variant="warning" class="col-md-4 mx-auto cards" @click="getInfo">
              <b-card-text class="project-name">
                Project: {{result.name}}
              </b-card-text>
              
              <b-card-text>
                Description: {{result.description}}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-tab>
        
        <b-tab title="Aplicate" active>
          <b-card-group deck >
          </b-card-group>
        </b-tab>
  
        <b-tab title="Terminate" active>
          <b-card-group deck >
          </b-card-group>
        </b-tab>
  
        <b-tab title="Ale Mele" active>
          <b-card-group deck >
          
          </b-card-group>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  import ActivityService from '../services/ActivityApi';
  import jwt_decode from 'jwt-decode';
  export default {
    id : id,
    data () {
      return {
        page: 1,
        results: [
          {
            id: null,
            name: '',
            description: '',
            status: null
          },
        ],
        numResults: null,
        perPage: null,
        numPages: null
      }
    },
    mounted(){
      ActivityService.getActivityList (this.page).then ((response) => {
        console.log (response);
        this.results = response.data.results;
        let decoded = jwt_decode(this.token);
        console.log(decoded);
      })
        .catch (error => {
          console.log (error)
        })
    },
    methods: {
      getInfo () {
        this.$router.push ('/activity');
      },
      created () {
      },
    }
  }
</script>
<style>
  .cards:hover {
    cursor: pointer;
  }
</style>

