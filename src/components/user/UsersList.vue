<template>
  <div class="col home-content users-list">
    <div class="mb-5">
      <div class="mt-2">
        <section id="card-outline">
          <i
            id="show-btn"
            v-b-tooltip.hover.left
            class="fas fa-filter float-right mb-3"
            title="Add filter"
            @click="$bvModal.show('bv-modal-example')"
          />

          <b-modal id="bv-modal-example" ref="my-modal">
            <template slot="modal-title">
              Filter
            </template>
            <div class="d-block">
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
              <b-button size="sm" variant="success" @click="applyFilter">
                Apply filter
              </b-button>
            </template>
          </b-modal>

          <h2 class="text-center my-3 mb-3">Team</h2>

          <b-row>
            <b-container
              v-for="item in form.results"
              :key="item.id"
              class="col-md-4 mb-2 row-eq-height"
              @click="$bvModal.show('bv-modal-user')"
            >
              <div class="card-deck">
                <b-card
                  no-body
                  class="card-color overflow-hidden col-12"
                  bg-variant="light"
                  border-variant="warning"
                  @click="clickedUserId = item.id"
                >
                  <b-row no-gutters>
                    <b-col class="col-md-5">
                      <div class="image-out-container img-in-container">
                        <b-card-img v-if="item.avatar" :src="avatarPath + item.avatar['200x200']"/>
                        <b-card-img v-else-if="!item.avatar" :src="'/img/person1.png'"/>
                      </div>
                    </b-col>
                    <b-col class="col-md-7">
                      <b-card-body :title="item.name + ' ' + item.surname">
                        <b-card-text class="text-uppercase">
                          <i class="fas fa-map-marker-alt mr-1 my-2"/>{{ item.location }}
                          <i class="fas fa-graduation-cap ml-2"/> {{ item.position }} {{ seniorityList[item.seniority] }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>

              <b-modal
                v-if="clickedUserId === item.id"
                id="bv-modal-user"
                ref="my-modal"
                hide-footer
              >
                <template slot="modal-title">
                  {{ item.username }}'s Profile
                </template>

                <div class="edit profile-card home-content">
                  <section class="ml-4 mr-2 text-center card-body">
                    <div class="d-flex justify-content-center h-100 image-out-container avatar-in-container">
                      <b-card-img v-if="item.avatar" :src="avatarPath + item.avatar['200x200']"/>
                      <b-card-img v-else-if="!item.avatar" :src="'/img/person1.png'"/>
                    </div>

                    <h3 class="mt-1">{{ item.name }} {{ item.surname }}</h3>

                    <h6 class="seniority-text mt-2 text-uppercase">
                      {{ item.position }} {{ seniorityList[item.seniority] }}
                    </h6>

                    <hr class="line">

                    <h5 class="text-center mb-3">Skills:</h5>

                    <div class="text-left row">
                      <b-list-group v-for="items in item.technologies" :key="items.id" horizontal class="text-left">
                        <div class="box text-left">{{ items.name }}</div>
                      </b-list-group>
                    </div>

                    <div class="text-center my-3 row">
                      <div class="mb-2">
                        <i class="fas fa-envelope ml-2 mr-1"/>{{ item.email }}

                        <i class="fas fa-map-marker-alt ml-3 mr-1"/>{{ item.location }}
                      </div>
                    </div>
                  </section>
                </div>
              </b-modal>
            </b-container>
          </b-row>
        </section>
      </div>

      <div class="d-flex justify-content-center my-4">
        <b-pagination
          v-model="currentPage"
          bg-variant="dark"
          :total-rows="form.numResults"
          :per-page="usersPerPage"
          aria-controls="my-table"
          @input="getData"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { basePath } from '@/constants/apiEndpoints';

  export default {
    data: () => ({
      form: {
        results: [
          { avatar: {} },
        ],
      },
      technologyChosen: {},
      formTechnologies: [],
      requestFilter: '',
      currentPage: 1,
      usersPerPage: 12,
      avatarPath: basePath + '/',
      clickedUserId: null
    }),
    computed: {
      seniorityList: () => ['JUNIOR', 'MIDDLE', 'SENIOR'],
    },
    mounted() {
      this.getData();
      this.getTechnologies();
    },
    methods: {
      applyFilter() {
        this.currentPage = 1;
        this.getData();
        this.$refs['my-modal'].hide();
      },
      getTechnologies() {
        UserApi.getTechnologies()
          .then((response) => {
            this.formTechnologies = response.data;
          });
      },
      getData() {
        let data = '?pagination[page]='
          + this.currentPage
          + '&pagination[per_page]='
          + this.usersPerPage
          + this.requestFilter;

        this.$router.push({ name: 'usersList', params: { filter: data }});

        UserApi.userList(this.$route.params.filter)
          .then((response) => {
            this.form = response.data;
            this.numResults = response.data.numResults;
            this.requestFilter = '';
          });
      }
    }
  }
</script>
