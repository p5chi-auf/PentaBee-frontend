<template>
  <div class="edit">
    <div class="profileCard home-content">
      <section id="card-outline">
        <b-container class="col-md-9 mx-auto">
          <b-row align-h="center" class="mt-5">
            <b-card class="p-3">
              <h4 class="text-center">
                Create an activity
                <hr>
              </h4>
              
              <b-alert
                show
                class="text-center"
                variant="warning"
                dismissible
                fade
              >
                <i class="fas fa-smile-wink"/>
                Add information about your Activity
              </b-alert>
              
              <b-form class="row" @submit.prevent="createActivity()">
                <b-form-group
                  class="col-md-6"
                >
                  <label class="ml-3 text-color-activity">Name of activity:</label>
                  <b-form-input
                    v-model="form.name"
                    v-validate.continues="'required|min:3|max:100'"
                    placeholder="Name of activity"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.has('name') }"
                  />
                  
                  <span v-if="errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</span>
                </b-form-group>
                
                <b-form-group class=" col-md-6">
                  <div class="row  mt-4">
                    <b-form-radio
                      v-model="form.public"
                      :value="true"
                      class=" ml-3 col-md-5 mt-2 text-color-activity"
                    >
                      Public
                    </b-form-radio>
                    <b-form-radio
                      v-model="form.public"
                      :value="false"
                      class="ml-3 col-md-5 mt-2 text-color-activity"
                    >
                      Private
                    </b-form-radio>
                  </div>
                </b-form-group>
  
                <div class="col-md-6">
                  <technology-list v-model="form.technologies"/>
                </div>
  
                <div class="col-md-6">
                  <activity-types-list v-model="form.types"/>
                </div>
                
                <b-form-group
                  class="col-md-6"
                >
                  <label class="ml-3 text-color-activity">Application deadline:</label>
                  <datetime
                    v-model="form.application_deadline"
                    name="application_deadline"
                    value-zone="UTC"
                    type="datetime"
                  />
                </b-form-group>
                
                <b-form-group
                  class=" col-md-6"
                >
                  <label class="ml-3 text-color-activity">Final deadline:</label>
                  <datetime
                    v-model="form.final_deadline"
                    name="final_deadline"
                    value-zone="UTC"
                    type="datetime"
                  />
                </b-form-group>
                
                <b-form-group
                  class="col-md-12"
                >
                  <label class="ml-3 text-color-activity">Activity description:</label>
                  <b-textarea
                    id="description"
                    v-model="form.description"
                    v-validate.continues="'required'"
                    name="description"
                    placeholder="Something about the project..."
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.has('description') }"
                  />
    
                  <span v-if="errors.has('description')" class="invalid-feedback">{{ errors.first('description') }}</span>
                </b-form-group>
              </b-form>
              
              <div class="text-center button">
                <b-btn
                  class="col-md-5 float-none d-inline-block btn btn-1 mt-2"
                  variant="warning"
                  block
                  pill
                  @click="createActivity()"
                >Create Activity
                </b-btn>
              </div>
            
            </b-card>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>
<script>
  import RegisterService from '../../services/activityApi';
  import moment from 'moment';
  import TechnologyList from "./Technologies";
  import ActivityTypesList from "./Types";

  export default {
    components: {
      TechnologyList: TechnologyList,
      ActivityTypesList: ActivityTypesList
    },
    data () {
      return {
        form: {
          name: '',
          description: '',
          application_deadline: '2019-07-24T11:22:00.000Z',
          final_deadline: '2019-07-24T11:22:00.000Z',
          status: 0,
          public: true,
          technologies: [],
          types: [],
        }
      }
    },
    mounted () {
      getLocalTime:{
        let localTime = new Date ();
        this.form.application_deadline = moment (localTime).toISOString ();
        this.form.final_deadline = moment (this.form.application_deadline).toISOString ();

      }
    },
    methods: {
      createActivity () {
        console.log (this.form.application_deadline);
        console.log (this.form);
        let activity = JSON.parse (JSON.stringify (this.form));
        activity.application_deadline = moment (this.form.application_deadline).format ("X");
        activity.final_deadline = moment (this.form.final_deadline).format ("X");
        RegisterService.createActivity (activity)
          .then ((response) => {
            this.$router.push ('/activity-list');
          })
          .catch (error => {
            alert('yor data are bad')
          })
      }
    }
  }
</script>
