<template>
  <div class="col home-content activity-list">
    <div class="mb-5">
      <b-card no-body>
        <div class="mt-2">
          <b-dropdown id="dropdown-form" ref="dropdown" text="Filter for activity list"
                      class="col-4 end align-content-end header-activity-list"
          >
            <b-dropdown-form>
              <b-form-group>
                <b-form-input
                  v-model="activityName"
                  type="text"
                  size="sm"
                  placeholder="Activity Name"
                  @change="requestFilter=requestFilter+'&filter[name]='+activityName"
                />
              </b-form-group>
              
              <b-form-group>
                <multiselect
                  v-model="technologyChosen"
                  placeholder="Search a type"
                  label="name"
                  track-by="id"
                  :options="formTechnologies"
                  :multiple="false"
                  :taggable="true"
                  @input="requestFilter=requestFilter+'&filter[technology][]='+technologyChosen.id"
                />
              </b-form-group>
              
              <b-button variant="primary" size="sm" @click="searchByName">Filter</b-button>
            </b-dropdown-form>
            <b-dropdown-divider/>
          </b-dropdown>
        </div>
        
        <i
          class="fas fa-plus-circle mt-1 create-activity-icon"
          @click="$router.push('/activity-create')"
        />
        <b-tabs card>
          <section class="tab-section">
            <b-tab title="Mine" active/>
            
            <b-tab title="Joined" active/>
            
            <b-tab title="Finished" active/>
            
            <b-tab title="All" active @click="getData">
              <div class="row">
                <div
                  v-for="result in results"
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
                      <img
                        v-if="result.cover"
                        :src="coverOriginPath+result.cover.original"
                        class="activity-image mr-2"
                        alt="image"
                      >
                      <img v-else
                           src="../../assets/images/combs.jpg"
                           class="activity-image mr-2"
                           alt="image"
                      >
                      
                      <b-card-text class="col-md-10 text-name">
                        {{ result.name | truncate(28, '...') }}
                      </b-card-text>
                    </div>
                    
                    <hr class="line">
                    
                    <b-card-text class="description-height text-center">
                      {{ result.description | truncate(60, '...') }}
                    </b-card-text>
                    
                    <b-card-text class="ml-3 owner-username-styles">
                      {{ result.owner.username }}
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
  import UserApi from '../../services/userDetailsApi';
  import { mapState } from 'vuex';
  import { basePath } from "../../constants/apiEndpoints";

  export default {
    data() {
      return {
        max: 10,
        results: [],
        pagination: {
          currentPage: 1,
          per_page: 9,
          numPages: 1,
          numResults: 1
        },
        coverOriginPath: basePath + '/',
        activityName: '',
        ownerName: '',
        filters: {
          activityNameFilter: '',
          technologyFilter: ''
        },
        technologyChosen: {},
        formTechnologies: [],
        requestFilter: ''
      }
    },
    computed: {
      ...mapState('account', ['user'])
    },
    mounted() {
      this.getData();
      this.getTechnologies()
    },
    methods: {
      getTechnologies() {
        UserApi.getTechnologies()
          .then((response) => {
            this.formTechnologies = response.data
          })
      },
      searchByName() {
        this.pagination.currentPage = 1;
        this.getData()
      },
      getData() {
        let filter =  '?pagination[page]='
          + this.pagination.currentPage
          + '&pagination[per_page]='
          + this.pagination.per_page + this.requestFilter;
        
        this.$router.push({ name: 'activityList', params: { filter: filter } });

        ActivityService.getActivityList(this.$route.params.filter)
          .then(response => {
            this.results = response.data.results;
            this.pagination.numResults = response.data.numResults;
            this.requestFilter = ''
          })
      },
      redirectToActivityDetails(id) {
        this.$router.push({ name: 'activity', params: { activityId: id } })
      }
    }
  }
</script>
