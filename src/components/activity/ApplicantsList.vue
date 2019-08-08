<template>
  <div class="col-md-12">
    <b-table
      responsive
      striped
      hover
      :fields="fields"
      :items="form.results"
      :busy="isBusy"
    >
      <div slot="table-busy" class="text-center text-danger my-2">
        <b-spinner class="align-middle"/>
        <strong>Loading...</strong>
      </div>
    </b-table>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';

  export default {
    data() {
      return {
        fields: [
          'id',
          'username',
          'name',
          'surname',
          'email',
          'location',
          'seniority',
          'position',
        ],
        isBusy: true,
        form: {
          results: [],
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
          },
        );
      },
    },
  };
</script>
