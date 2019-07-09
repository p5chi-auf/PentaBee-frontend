<template>
  <div class="mb-5">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Disponibile" active>
          <div class="row">
            <div
                    v-for="result in this.results"
                    v-bind:key="result.id"
                    @click="getInfo(result.id)"
                    class="col-md-4 "
            >
              <b-card bg-variant="light"
                      border-variant="warning"
                      class="cards mt-2"
                      style="height: available"
              >
                <b-card-text class="text-name ">
                  Project: {{result.name}}
                </b-card-text>
                
                <b-card-text>
                  Description: {{result.description}}
                </b-card-text>
              </b-card>
            </div>
          </div>
        </b-tab>
        <b-tab title="Aplicate" active>
          <div class="row">
            <div
                    v-for="result in this.results"
                    v-bind:key="result.id"
                    @click="getInfo(result.id)"
                    class="col-md-4">
              <b-card bg-variant="light"
                      border-variant="warning"
                      class="cards mt-2">
                <b-card-text class="text-name ">
                  Project: {{result.name}}
                </b-card-text>
                
                <b-card-text>
                  Description: {{result.description}}
                </b-card-text>
              </b-card>
            
            </div>
          </div>
        </b-tab>
        
        <b-tab title="Terminate" active>
          <div class="row">
            <div
                    v-for="result in this.results"
                    v-bind:key="result.id"
                    @click="getInfo(result.id)"
                    class="col-md-4">
              <b-card bg-variant="light"
                      border-variant="warning"
                      class="cards mt-2">
                <b-card-text class="text-name ">
                  Project: {{result.name}}
                </b-card-text>
                
                <b-card-text>
                  Description: {{result.description}}
                </b-card-text>
              </b-card>
            
            </div>
          </div>
        </b-tab>
        
        <b-tab title="Ale Mele" active>
          <div class="row">
            <div v-for="result in this.results"
                    v-bind:key="result.id"
                    @click="getInfo(result.id)"
                    class="col-md-4">
              <b-card bg-variant="light"
                      border-variant="warning"
                      class="cards mt-2">
                <b-card-text class="text-name ">
                  Project: {{result.name}}
                </b-card-text>
                
                <b-card-text>
                  Description: {{result.description}}
                </b-card-text>
              </b-card>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
    <div class="overflow-auto">
      <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
      ></b-pagination>
    
    
    </div>
  </div>
</template>

<script>
  import ActivityService from '../services/ActivityApi';

  export default {

    data () {
      return {
        results: [],
        pagination: {},
        currentPage: 1,
        perPage: 9,
      }
    },
    created () {
     this.getData();
    },
   
    methods: {
      getData(){
        ActivityService.getActivityList (this.currentPage, this.perPage).then ((response) => {
          this.results = response.data.results;
        })
          .catch (error => {
            console.log (error)
          })
      },
      getInfo (id) {
        this.$router.push ({name: 'activity', params: {id: id}});
      },

      rows() {
        return this.results.length;
      }
    }
  }
</script>
<style>
  .cards:hover {
    cursor: pointer;
  }
  .text-name {
    color: #000;
    font-size: 20px;
    text-shadow: 1px 1px 1px #fffab0;
  }
 
</style>

