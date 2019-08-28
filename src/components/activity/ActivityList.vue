<template>
  <div class="col home-content activity-list">
    <b-spinner v-if="spinner===true" class="spinner" variant="warning" label="Loading..."/>
    <div v-else class="mb-5">
      <b-card no-body>
        <div class="mt-2">
          <b-link
            v-b-tooltip.hover.top
            title="Create activity"
            class="create-activity-icon float-right ml-2 mr-2"
            @click="$router.push('/activity-create')"
          >
            <i class="fas fa-plus-circle"/>
          </b-link>

          <b-link
            id="show-btn"
            v-b-tooltip.hover.left
            title="Add filter"
            class="simple-icon float-right ml-2 mr-2"
            @click="$bvModal.show('bv-modal-example')"
          >
            <i class="fas fa-filter"/>
          </b-link>

          <b-modal id="bv-modal-example" ref="my-modal">
            <template slot="modal-title">
              Filter
            </template>
            <div class="d-block">
              <b-form-group>
                <label class="typo__label ml-3">Search by name:</label>

                <b-form-input
                  v-model="activityName"
                  type="text"
                  size="sm"
                  placeholder="Activity name"
                  @change="requestFilter=requestFilter+'&filter[name]='+activityName"
                />
              </b-form-group>

              <b-form-group>
                <label class="typo__label ml-3">Search by status:</label>

                <b-form-radio-group
                  v-model="activityStatus"
                  :options="options"
                  name="radio-options"
                  @input="requestFilter=requestFilter+'&filter[status]='+activityStatus"
                />
              </b-form-group>

              <b-form-group>
                <label class="typo__label ml-3">Search by known technologies:</label>

                <multiselect
                  v-model="technologyChosen"
                  placeholder="Search by technology"
                  label="name"
                  track-by="id"
                  :options="formTechnologies"
                  :multiple="false"
                  :taggable="true"
                  @input="requestFilter=requestFilter+'&filter[technology][]='+technologyChosen.id"
                />
              </b-form-group>
            </div>
            <template slot="modal-footer" slot-scope="{ ok, cancel }">
              <b-button size="sm" variant="danger" @click="cancel()">
                Cancel
              </b-button>
              <b-button size="sm" variant="success" @click="searchByName">
                Apply filter
              </b-button>
            </template>
          </b-modal>
        </div>

        <b-container class="col-12 bv-example-row">
          <section class="tab-section">
            <b-row>
              <div
                v-for="result in results"
                :key="result.id"
                class="col-md-4 row-eq-height"
                @click="redirectToActivityDetails(result.id)"
              >
                <b-card
                  bg-variant="light"
                  border-variant="warning"
                  class="col-md-12 mt-3 cards"
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
                    <p>Status: {{ typesStatus[result.status] }}</p>
                  </b-card-text>
                </b-card>
              </div>
            </b-row>
          </section>
        </b-container>

        <div class="d-flex justify-content-center my-4">
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
  import { basePath } from '../../constants/apiEndpoints';

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
        coverOriginPath: basePath + '/',
        activityName: '',
        ownerName: '',
        activityStatus: '',
        technologyChosen: {},
        formTechnologies: [],
        requestFilter: '',
        spinner: true,
        options: [
          { value: 1, text: 'In Validation' },
          { value: 2, text: 'New' },
          { value: 3, text: 'Finished' },
          { value: 4, text: 'Closed' }
        ],
      };
    },
    computed: {
      typesStatus: () => ['','In Validation', 'New', 'Finished', 'Closed'],
      ...mapState('account', ['user']),
    },
    mounted() {
      this.getData();
      this.getTechnologies();
    },
    methods: {
      getTechnologies() {
        UserApi.getTechnologies()
          .then((response) => {
            this.formTechnologies = response.data;
          });
      },
      searchByName() {
        this.pagination.currentPage = 1;
        this.getData();
        this.$refs['my-modal'].hide();
      },
      getData() {
        let filter = '?pagination[page]='
          + this.pagination.currentPage
          + '&pagination[per_page]='
          + this.pagination.per_page + this.requestFilter;
        this.$router.push({ name: 'activityList', params: { filter: filter } });

        ActivityService.getActivityList(this.$route.params.filter)
          .then(response => {
            this.results = response.data.results;
            this.pagination.numResults = response.data.numResults;
            this.requestFilter = '';
            this.spinner = false;
          });
      },
      redirectToActivityDetails(id) {
          this.$router.push({ name: 'activity', params: { activityId: id } });
      }
    }
  }
</script>
