<template>
  <div class="edit">
    <div class="profileCard home-content">
      <section id="card-outline">
        <b-container class="col-md-9">
          <b-row align-h="center" class="mt-5">
            <b-card class="p-3">
              <h4 class="text-center">
                Edit activity
              </h4>

              <hr>

              <b-form class="row" @submit.prevent="editActivity()">
                <b-form-group
                  id="input-group-1"
                  class="col-md-6"
                >
                  <label class="ml-3 text-color-activity">Name of activity:</label>

                  <b-form-input
                    v-model="form.name"
                    v-validate.continues="'required|min:3|max:100'"
                    name="name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.has('name') }"
                    @change="edited = true"
                  />

                  <span v-if="errors.has('name')" class="invalid-feedback">
                    {{ errors.first('name') }}
                  </span>
                </b-form-group>

                <b-form-group class="col-md-6">
                  <div class="row  mt-4">
                    <b-form-radio
                      v-model="form.public"
                      :value="true"
                      class="ml-3 col-md-5 mt-2 text-color-activity"
                      @change="edited = true"
                    >
                      Public
                    </b-form-radio>
                    <b-form-radio
                      v-model="form.public"
                      :value="false"
                      class="ml-3 col-md-5 mt-2 text-color-activity"
                      @change="edited = true"
                    >
                      Private
                    </b-form-radio>
                  </div>
                </b-form-group>

                <technology-list
                  v-model="form.technologies"
                  class="col-md-6"
                  @changeTechnologiesList="edited = true"
                />

                <types-list
                  v-model="form.types"
                  class="col-md-6"
                  @changeTypesList="edited = true"
                />

                <b-form-group id="input-group-3" class="col-md-6">
                  <label class="ml-3 text-color-activity">Application deadline:</label>
                  <datetime
                    v-model="form.application_deadline"
                    name="application_deadline"
                    value-zone="UTC"
                    type="datetime"
                    :min-datetime="form.application_deadline"
                    input-style="width: 185px"
                    @click="edited = true"
                  />
                </b-form-group>

                <b-form-group class="col-md-6">
                  <label class="ml-3 text-color-activity">Final deadline:</label>
                  <datetime
                    v-model="form.final_deadline"
                    name="final_deadline"
                    value-zone="UTC"
                    type="datetime"
                    :min-datetime="form.application_deadline"
                    input-style="width: 185px"
                    @click="edited = true"
                  />
                </b-form-group>

                <b-form-group class="col-md-12">
                  <label class="ml-3 text-color-activity">Status:</label>
                  <div class="row">
                    <b-form-radio-group
                      v-model="form.status"
                      :options="statusesActivity"
                      buttons
                      button-variant="outline-secondary"
                      size="lg"
                      class="col"
                      @change="edited = true"
                    />
                  </div>
                </b-form-group>


                <b-form-group id="input-group-2" class="col-md-12 mx-auto">
                  <label class="ml-3 text-color-activity">Description:</label>
                  <b-textarea
                    id="description"
                    v-model="form.description"
                    v-validate.continues="'required'"
                    name="description"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.has('description') }"
                    @change="edited = true"
                  />

                  <span
                    v-if="errors.has('description')"
                    class="invalid-feedback"
                  >{{ errors.first('description') }}</span>
                </b-form-group>

                <b-form-group class="col-md-12 mx-auto" label-for="coverActivity">
                  <label class="typo__label ml-3">Try To Upload Some Image:</label>

                  <b-form-file accept="image/jpeg, image/png" @change="uploadCoverActivity"/>
                  <b-img v-if="previewImage" :src="previewImage" class="uploading-image ml-3 mt-2" height="150"/>
                  <b-link
                    v-if="previewImage"
                    v-b-tooltip.hover.top
                    title="Delete image"
                    class="ml-3"
                    @click="deleteCover()"
                  >
                    <i class="fas fa-times" style="color: var(--red)"/>
                  </b-link>
                </b-form-group>
              </b-form>
              <div class="text-center button">
                <b-btn
                  class="col-md-5 float-none d-inline-block btn btn-1 mt-2"
                  @click="show()"
                >Edit Activity
                </b-btn>
              </div>

              <modal
                name="edit-activity"
                transition="nice-modal-fade"
                :min-width="100"
                :min-height="100"
                :max-width="300"
                :max-height="200"
                :delay="100"
                :adaptive="true"
              >
                <div class="example-modal-content text-center mt-5">
                  <h6>Do you want to save changes for activity?</h6>
                </div>

                <div class="row mt-lg-5 ml-3">
                  <b-button class="col-md-5" variant="dark" @click="cancel">
                    Cancel
                  </b-button>
                  <b-button
                    class="col-md-5 ml-3"
                    variant="warning"
                    @click="editActivity()"
                  >
                    Save
                  </b-button>
                </div>
              </modal>
            </b-card>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
  import ActivityService from '../../services/activityApi';
  import { mapState } from 'vuex';
  import moment, { unix } from 'moment';
  import TechnologyList from './Technologies';
  import TypesList from './Types';
  import { basePath } from "../../constants/apiEndpoints";

  export default {
  components: {
    TechnologyList: TechnologyList,
    TypesList: TypesList
  },
  data() {
    return {
      form: {
        id: null,
        name: '',
        description: '',
        application_deadline: '',
        final_deadline: '',
        status: 0,
        public: true,
        technologies: [{ id: null }],
        types: [],
        cover: ''
      },
      edited: false,
      technologiesList: [],
      statusesActivity: [
        { text: 'New', value: '0' },
        { text: 'Finished', value: '1' },
        { text: 'Closed', value: '2' }
      ],
      previewImage: null
    }
  },
  computed: {
    ...mapState('account', ['user'])
  },
  mounted() {
    ActivityService.getActivityDetails(this.$route.params.activityEditId)
      .then(response => {
        this.form = response.data;
        this.form.application_deadline = moment(unix(this.form.application_deadline)).toISOString();
        this.form.final_deadline = moment(unix(this.form.final_deadline)).toISOString();
        if (this.form.cover) {
          this.previewImage = basePath + '/' + this.form.cover.original;
          this.form.cover = null
        }
      })
  },
  methods: {
    uploadCoverActivity(e) {
      const image = e.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(image);
      reader.onload = e => {
        this.previewImage = e.target.result;
        this.form.cover = this.previewImage;
        this.edited = true
      }
    },
    show() {
      this.$modal.show('edit-activity')
    },
    cancel() {
      this.$modal.hide('edit-activity')
    },
    editActivity() {
      this.$modal.hide('edit-activity');
      let activity = JSON.parse(JSON.stringify(this.form));

      activity.application_deadline = moment(this.form.application_deadline).format('X');
      activity.final_deadline = moment(this.form.final_deadline).format('X');

      if (this.edited === true) {
        ActivityService.editActivity(this.$route.params.activityEditId, activity)
          .then(() => {
            this.$toast.open({
              message: 'Activity successfully edited!',
              type: 'success',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            });
            this.$router.push('/activity-list/:filter')
          })
          .catch(() => {
            this.$toast.open({
              message: 'Please complete all required fields',
              type: 'error',
              position: 'top-right',
              duration: 3000,
              dismissible: true
            })
          })
      }
      else {
        this.$toast.open({
          message: 'You must to make changes',
          type: 'error',
          position: 'top-right',
          duration: 3000,
          dismissible: true
        })
      }
    },
    deleteCover(){
      const data = {
        ...this.form,
        id: this.form.id
      };

      ActivityService.deleteCoverActivity(data)
        .then(() => {
          this.$toast.open({
            message: 'Cover successfully deleted!',
            type: 'success',
            position: 'top-right',
            duration: 3000,
            dismissible: true
          });

          this.$router.push({ name: 'activityList' })
        })
        .catch(() => {
          this.$toast.open({
            message: 'Access denied!',
            type: 'error',
            position: 'top-right',
            duration: 3000,
            dismissible: true
          })
        })
    },
  }
}
</script>
