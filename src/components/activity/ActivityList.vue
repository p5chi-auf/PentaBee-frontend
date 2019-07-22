<template>
  <div class="col home-content">
    <div class="mb-5">
      <b-card no-body>
        <b-tabs card>
          <section id="card-outline">
            <div class="activity-list">
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
            </div>
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
        },
      };
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
      },
    },
  };
</script>
