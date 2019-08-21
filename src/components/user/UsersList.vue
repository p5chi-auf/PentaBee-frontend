<template>
  <div class="col home-content users-list">
    <div class="mb-5">
      <div class="mt-2">
        <section id="card-outline">
          <h2 class="text-center my-3 mb-3">Team</h2>

          <b-row>
            <div v-for="item in form.results"
                 :key="item.id"
                 class="container col-md-4 mb-2"
            >
              <div class="card-deck">
                <b-card
                  no-body
                  class="card-color overflow-hidden"
                  bg-variant="light"
                  border-variant="warning"
                >
                  <b-row no-gutters>
                    <b-col class="col-md-4">
                      <div class="image-out-container">
                        <div class="img-in-container">
                          <b-card-img v-if="item.avatar" :src="avatarPath + item.avatar['200x200']"/>
                          <b-card-img v-else :src="'/img/person1.png'"/>
                        </div>
                      </div>
                    </b-col>
                    <b-col class="col-md-8">
                      <b-card-body :title=" item.name + ' ' + item.surname">
                        <b-card-text class="text-uppercase">
                          <i class="fas fa-map-marker-alt mr-1 my-2"/>{{ item.location }}
                          <i class="fas fa-graduation-cap ml-2"/> {{ item.position }} {{ seniorityList[item.seniority] }}
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </div>
            </div>
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
          @input="getUsersList"
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
      currentPage: 1,
      usersPerPage: 12,
      avatarPath: basePath + '/',
    }),
    computed: {
      seniorityList: () => ['JUNIOR', 'MIDDLE', 'SENIOR'],
    },
    mounted() {
      this.getUsersList();
    },
    methods: {
      getUsersList() {
        let data = '?pagination[page]=' + this.currentPage + '&pagination[per_page]=' + this.usersPerPage;
        UserApi.userList(data)
          .then((response) => {
            this.form = response.data;
          });
      },
    },
  };
</script>
