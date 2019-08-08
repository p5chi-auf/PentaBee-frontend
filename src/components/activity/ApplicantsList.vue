<template>
  <div class="col-md-12 mb-5">
    <b-table
            responsive
            striped
            :fields="neededFields"
            :items="form.results"
            :current-page="form.currentPage"
            :per-page="form.perPage"
            :busy="isBusy"
    >
      <template slot="Accept/Decline" slot-scope="row">
        <i class="ml-4 far fa-check-circle mouse-type" @click="acceptApplicant(row.item.id)"/>
        
        <i class="ml-4 fas fa-times mouse-type" @click="declineApplicant(row.item.id)"/>
        
        <i class="ml-4 fas fa-info-circle mouse-type" @click="row.toggleDetails"/>
      </template>
      
      <template slot="seniority" slot-scope="row">
        <p v-if="row.item.seniority === 0">Junior</p>
        <p v-else-if="row.item.seniority === 1">Middle</p>
        <p v-else-if="row.item.seniority === 2">Senior</p>
      </template>
      
      <div slot="table-busy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"/>
        
        <strong>Loading...</strong>
      </div>
      
      <template slot="row-details" slot-scope="row">
        <div class="row col-md-12">
          Technologies:
          <p v-for="myTechnology in row.item.technologies" :key="myTechnology" class="col">{{ myTechnology.name }}</p>
        </div>
        <div class="row col-md-12">
          <div class="col-md-6 row">
            Rating: <i v-for="star in row.item.stars" :key="star" class="fas fa-star ml-1"/>
          </div>
          <div class="col-md-6 row">
            Email : <p>{{ row.item.email }}</p>
          </div>
        </div>
      
      </template>
    </b-table>
    <div class="row col-md-12">
      <b-row class="mx-auto">
        <b-col md="12" class="my-1">
          <b-pagination
                  v-model="form.currentPage"
                  :total-rows="form.numResults"
                  :per-page="form.perPage"
                  class="my-0"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';

  export default {
    data() {
      return {
        neededFields: [
          { key: 'username', sortable: true },
          { key: 'name', sortable: true },
          { key: 'surname', sortable: true },
          { key: 'location', sortable: true },
          { key: 'position', sortable: true },
          { key: 'seniority', sortable: true},
          { key: 'Accept/Decline' }
        ],
        isBusy: true,
        form: {
          results: [
            { technologies: [] },
            { stars: null }
          ]
        }
      }
    },
    mounted() {
      this.getListApplicants();
    },
    methods: {
      getListApplicants() {
        ActivityService.getApplicantsList(this.$route.params.idActivity).then(
          response => {
            this.form = response.data;
            this.form.results = response.data.results;
            this.isBusy = false;
            this.form.perPage = 6;
            this.form.numPages = this.form.numResults / this.form.perPage;
          }
        )
      },
      acceptApplicant(applicantId) {
        ActivityService.acceptApplicants(
          this.$route.params.idActivity,
          applicantId
        )
          .then(() => {
            this.$toast.open({
              message: 'User successful accepted',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            })
          })
          .catch(error => {
            this.$toast.open({
              message: error.message,
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            })
          })
      },
      declineApplicant(applicantId) {
        ActivityService.declineApplicants(
          this.$route.params.idActivity,
          applicantId
        )
          .then(() => {
            this.$toast.open({
              message: 'User successful declined',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            })
          })
          .catch(response => {
            this.$toast.open({
              message: response.message,
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            })
          })
      }
    }
  }
</script>
<style>
  .mouse-type {
    cursor: pointer;
  }
  .border-info{
    border: 1px #1c0b00;
    
  }
</style>
