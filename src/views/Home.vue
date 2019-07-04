<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Disponibile" active>
          <b-card-group deck >
            <b-card v-for="result in this.results" v-bind:key = "result.id" bg-variant="light" border-variant="warning" class="col-md-4 mx-auto cards" @click="getInfo(result.id)">
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
  export default {
    name: 'ActivityList',
    data () {
      return {
        page: 1,
        results: [],
        numResults: null,
        perPage: null,
        numPages: null
      }
    },
    mounted(){
      ActivityService.getActivityList (this.page).then ((response) => {
        console.log (response.data.results);
        this.results = response.data.results;
        console.log('number of items'+ this.results.length);
      })
        .catch (error => {
          console.log (error)
        })
    },
    methods: {
      getInfo (id) {
        localStorage.setItem('idActivity',id);
        this.$router.push({name:'activity',params:{AId:id}});
      }
    }
  }
</script>
<style>
  .cards:hover {
    cursor: pointer;
  }
</style>

