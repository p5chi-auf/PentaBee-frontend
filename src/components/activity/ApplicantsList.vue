<template>
  <div class="col-md-12 mb-5">
    <b-table
      responsive
      striped
      hover
      :fields="fields"
      :items="form.results"
      :busy="isBusy"
    >
      <template slot="Accept/Decline" slot-scope="row">
        <i
          class="ml-4 far fa-check-circle mouse-type"
          @click="acceptApplicant(row.item.id)"
        />
        <i
          class="ml-4 fas fa-times mouse-type"
          @click="declineApplicant(row.item.id)"
        />
        <i class="ml-4 fas fa-info-circle" @click="row.toggleDetails"/>
      </template>
      <div slot="table-busy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"/>
        <strong>Loading...</strong>
      </div>
      
      <template slot="row-details" slot-scope="row">
        <div class="ml-sm-1 row">
          Technologies:
          <p v-for="myTechnology in row.item.technologies" class="col">{{ myTechnology.name }}</p>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';

  export default {
    data() {
      return {
        fields: [
          { key: 'username', sortable: true },
          { key: 'name', sortable: true },
          { key: 'surname', sortable: true },
          { key: 'email', sortable: true },
          { key: 'location', sortable: true },
          { key: 'seniority', sortable: true },
          { key: 'position', sortable: true },
          { key: 'Accept/Decline' },
        ],
        isBusy: true,
        form: {
          results: [
            { technologies: [] }
          ],
        },
        window: {
          width: 0,
          height: 0,
        },
      };
    },
    mounted() {
      this.getListApplicants();
    },
    methods: {
      getListApplicants() {
        ActivityService.getApplicantsList(this.$route.params.idActivity).then(
          response => {
            this.form.results = response.data.results;
            this.isBusy = false;
          }
        );
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
              dismissible: true,
            });
          })
          .catch(error => {
            this.$toast.open({
              message: error.message,
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });
          });
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
            });
          })
          .catch(response => {
            this.$toast.open({
              message: response.message,
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true,
            });
          });
      },
    },
  };
</script>
<style>
  .mouse-type {
    cursor: pointer;
  }
</style>
