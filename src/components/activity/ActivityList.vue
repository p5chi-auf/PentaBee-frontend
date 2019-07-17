<template>
  <div class="mb-5">
    <b-card no-body>
      <b-tabs card>
        <section class="tabSection">
          <b-tab title="All" active>
            <div class="row">
              <div v-for="result in results"
                   :key="result.id"
                   class="col-md-4 row-eq-height"
                   @click="setActivityId(result.id)"
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
                    {{ result.description | truncate(100, '...') }}
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
                   @click="setActivityId(result.id)"
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

          <b-tab title="Finished" active class>
            <div class="row">
              <div v-for="result in results"
                   :key="result.id"
                   class="col-md-4 row-eq-height"
                   @click="setActivityId(result.id)"
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
                   @click="setActivityId(result.id)"
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
</template>

<script>
  import ActivityService from '../../services/ActivityApi';

  export default {
    data () {
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

    mounted () {
      this.getData ();
    },

    methods: {
      getData () {
        const request = '?pagination[page]=' + this.pagination.currentPage + '&pagination[per_page]=' + this.pagination.per_page;

        ActivityService.getActivityList (request).then ((response) => {
          this.results = response.data.results;
          this.pagination.numResults = response.data.numResults;
        })
          .catch (error => {
            console.log (error)
          })
      },

      setActivityId (id) {
        this.$router.push ({name: 'activity', params: {activityId: id}});
      },
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
</style>

