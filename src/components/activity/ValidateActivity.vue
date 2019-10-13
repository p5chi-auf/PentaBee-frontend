<template>
  <div class="col home-content activity-list">
    <h2 class="text-center my-3 mb-3">Validate activities</h2>
    <div class="mb-5">
      <section class="tab-section">
        <b-row>
          <div
            v-for="result in form"
            :key="result.id"
            class="col-md-4 row-eq-height"
          >
            <b-card
              bg-variant="light"
              border-variant="warning"
              class="col-md-12 mt-3 cards"
            >
              <b-link
                v-b-tooltip.hover.top
                title="Validate activity"
                class="float-right"
                @click="activityValidate(result.id)"
              >
                <i class="fas fa-check" style="color: var(--green)"/>
              </b-link>
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
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import { basePath } from '../../constants/apiEndpoints';

  export default {
    data: () => ({
      form: [{
        id: '',
        name:'',
        description:'',
        owner: {
          username: '',
				}
			}],
      coverOriginPath: basePath + '/',
    }),
    computed: {
      typesStatus: () => ['','In Validation', 'New', 'Finished', 'Closed'],
    },
    mounted() {
      this.activitiesGet();
    },
		methods: {
      activitiesGet(){
        ActivityService.getActivities()
        .then((response) => {
          this.form = response.data;
        })
			},
      activityValidate(id){
        ActivityService.validateActivity(id)
          .then(() => {
            this.$toast.open({
              message: 'Job was validated with success!',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            });
            this.activitiesGet()
          })
          .catch((error) => {
            let message = error.response.data.message;

            this.$toast.open({
              message: message,
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            })
          })
			}
		}
	}
</script>

