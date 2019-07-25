<template>
  <div class="col home-content">
    <div class="mb-5">
      <b-card no-body>
        <i class="fas fa-plus-circle create-activity-icon mt-1" @click="$router.push('/activity-create')"/>
        <b-tabs card>
          <section class="tabSection">
            <b-tab title="All" active>
              <div class="row">
                <div v-for="result in results"
                     :key="result.id"
                     class="col-md-4 row-eq-height"
                     @click="redirectToActivityDetails(result.id)"
                >
                  <b-card
                    bg-variant="light"
                    border-variant="warning"
                    class="cards col-md-12 mt-3"
                  >
                    <b-card-text class="text-name text-center">
                      {{ result.name | truncate(20, '...') }}
                    </b-card-text>

                    <hr class="line-separator">

                    <b-card-text class="description-height text-center">
                      {{ result.description | truncate(70, '...') }}
                    </b-card-text>
                  </b-card>
                </div>
              </div>
            </b-tab>

            <b-tab title="Joined" active>
              <div class="row">
                <div v-for="result in results"
                     :key="result.id"
                     class="col-md-4 row-eq-height"
                     @click="redirectToActivityDetails(result.id)"
                >
                  <b-card
                    bg-variant="light"
                    border-variant="warning"
                    class="cards col-md-12 mt-3"
                  >
                    <b-card-text class="text-name text-center">
                      {{ result.name | truncate(30, '...') }}
                    </b-card-text>

                    <hr class="line-separator">

                    <b-card-text class="description-height text-center">
                      {{ result.description | truncate(70, '...') }}
                    </b-card-text>
                  </b-card>
                </div>
              </div>
            </b-tab>

            <b-tab title="Finished" active class>
              <div class="row">
                <div v-for="result in results"
                     :key="result.id"
                     class="col-md-4 row-eq-height"
                     @click="redirectToActivityDetails(result.id)"
                >
                  <b-card
                    bg-variant="light"
                    border-variant="warning"
                    class="cards col-md-12 mt-3"
                  >
                    <b-card-text class="text-name text-center">
                      {{ result.name | truncate(30, '...') }}
                    </b-card-text>

                    <hr class="line-separator">

                    <b-card-text class="description-height text-center">
                      {{ result.description | truncate(100, '...') }}
                    </b-card-text>
                  </b-card>
                </div>
              </div>
            </b-tab>

            <b-tab title="Mine" active class="tab-style">
              <div class="row">
                <div v-for="result in results"
                     :key="result.id"
                     class="col-md-4 row-eq-height"
                     @click="redirectToActivityDetails(result.id)"
                >
                  <b-card
                    bg-variant="light"
                    border-variant="warning"
                    class="cards col-md-12 mt-3"
                  >
                    <div class="row">
                      <img src="../../assets/images/combs.jpg" class=" activity-image mr-2">
                      <b-card-text class="col-md-10 text-name">
                        {{ result.name | truncate(30, '...') }}
                      </b-card-text>
                    </div>

                    <hr class="line-separator">

                    <b-card-text class="description-height text-center">
                      {{ result.description | truncate(70, '...') }}
                    </b-card-text>
                    <b-card-text>
                      {{ result.owner }}
                    </b-card-text>
                  </b-card>
                </div>
              </div>
            </b-tab>
          </section>
        </b-tabs>
        <div class="d-flex justify-content-center">
          <b-pagination
            v-model="pagination.currentPage"
            bg-variant="dark"
            :total-rows="pagination.numResults"
            :per-page="pagination.per_page"
            aria-controls="my-table"
            @input="getData"
          />
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import { mapState } from 'vuex';

  export default {
    data() {
      return {
        max: 10,
        results: [],
        pagination: {
          currentPage: 1,
          per_page: 9,
          numPages: 1,
          numResults: 1,
        }
      }
    },
    computed:{
      ...mapState('account',['user']),
    },
		mounted() {
      this.getData();
    },
    
    methods: {
      getData() {
        const request = '?pagination[page]=' + this.pagination.currentPage + '&pagination[per_page]=' + this.pagination.per_page;

        ActivityService.getActivityList(request).then((response) => {
          this.results = response.data.results;
          this.pagination.numResults = response.data.numResults;
        })
          .catch(error => {
            console.log(error);
          });
      },
      redirectToActivityDetails(id) {
        this.$router.push({ name: 'activity', params: { activityId: id } });
      }
    }
  }
</script>

<style>
  .text-name {
    color: #000;
    font-size: 20px;
    text-shadow: 1px 1px 1px #fffab0;
    height: available;
  }
  
  .row-eq-height {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  
  .description-height {
    height: 60px;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
  
  .tabSection .card {
    border-radius: 15px;
    box-shadow: 5px 5px 5px #ffda00;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }
  
  .tabSection .card:hover {
    border-radius: 20px;
    box-shadow: 5px 5px 10px #9e9e9e;
    cursor: pointer;
  }
  
  .tabSection .edit-card {
    border-radius: 0;
    box-shadow: 5px 5px 5px #ffda00;
    transition: all 0.3s ease-in;
    -webkit-transition: all 0.3s ease-in;
    -moz-transition: all 0.3s ease-in;
  }
  
  .line-separator {
    padding: 1px;
    background-image: linear-gradient(to right, white, #F57C00, white);
  }
  .activity-image {
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 50%;
    position: relative;
    height: 40px;
    width: 40px;
  }
  .create-activity-icon{
    position:fixed;
    right: 35px;
    z-index: 1;
    font-size: 40px;
    cursor: pointer;
    background: linear-gradient(to right, rgba(255, 218, 0, 0.8) 0%, rgba(245, 124, 0, 0.8) 50%, rgba(255, 188, 29, 0.8) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .create-activity-icon:hover{
    background: rgba(40, 41, 44, 0.69);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
