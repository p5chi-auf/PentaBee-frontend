<template>
  <div class="col home-content edit users-list">
    <div class="mb-5">
      <h2 class="text-center my-3 mb-3">Team</h2>

      <div class="row">
        <div
          v-for="item in form.results"
          :key="item.id"
          class="col-md-4"
        >
          <section class="card-outline">
            <b-card
              border-variant="warning"
              class="card-color col-md-12 mt-3"
            >
              <div class="row">
                <div class="image-out-container">
                  <div class="img-in-container">
                    <b-img v-if="item.avatar" :src="avatarPath + item.avatar['200x200']"/>
                    <b-img v-else :src="'/img/person1.png'"/>
                  </div>
                </div>
                <b-card-text class="description-height text-center text-uppercase my-2">

                  <p class="ml-5 my-3 text-name"> {{ item.name }} {{ item.surname }} </p>

                  <i class="fas fa-map-marker-alt ml-4"/>

                  <b-link class="ml-2 mr-2">{{ item.location }}</b-link>

                  <i class="fas fa-graduation-cap"/> {{ item.position }} {{ seniorityList[item.seniority] }}
                </b-card-text>
              </div>
            </b-card>
          </section>
        </div>
      </div>

      <div class="d-flex justify-content-center my-4">
        <b-pagination
          v-model="form.currentPage"
          bg-variant="dark"
          :total-rows="form.numResults"
          :per-page="form.per_page"
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
        avatar: {},
        results: [],
        currentPage: 1,
        per_page: 9
      },
      avatarPath: basePath + '/',
    }),
    computed: {
      seniorityList: () => ['JUNIOR', 'MIDDLE', 'SENIOR'],
    },
    mounted() {
      UserApi.userList('')
        .then((response) => {
          this.form = response.data;
        });
      this.getUsersList()
    },
    methods: {
      getUsersList() {
        let data = '?pagination[page]=' + this.form.currentPage + '&pagination[per_page]=' + this.form.per_page;
        UserApi.userList(data)
          .then((response) => {
            this.form = response.data
          })
      },
    }
  };
</script>
