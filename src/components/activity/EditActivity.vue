<template>
  <div class="edit">
    <div class="profileCard home-content">
      <section id="card-outline">
        <b-container class="col-md-8">
          <b-row align-h="center" class="mt-5">
            <b-card class="p-3">
              <h4 class="text-center">
                Edit activity
                <hr>
              </h4>
          
              <b-form class="row" @submit.prevent="editActivity()">
                <b-form-group
                  id="input-group-1"
                  class="col-md-6"
                  label="Name of project:"
                  label-for="name"
                >
                  <b-form-input
                    id="name"
                    v-model="form.name"
                    v-validate.continues="'required|min:3|max:100'"
                    name="name"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.has('name') }"
                  />
              
                  <span v-if="errors.has('name')" class="invalid-feedback">{{ errors.first('name') }}</span>
                </b-form-group>
            
                <b-form-group
                  id="input-group-2"
                  class="col-md-6"
                  label="Description:"
                  label-for="description"
                >
                  <b-form-input
                    id="description"
                    v-model="form.description"
                    v-validate.continues="'required'"
                    name="description"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.has('description') }"
                  />
              
                  <span v-if="errors.has('description')" class="invalid-feedback">{{ errors.first('description') }}</span>
                </b-form-group>
            
                <b-form-group
                  id="input-group-3"
                  class="col-md-6"
                  label="Application deadline:"
                  label-for="application_deadline"
                >
                  <datetime
                    v-model="form.application_deadline"
                    name="application_deadline"
                    value-zone="UTC"
                    type="datetime"
                    input-style="string"
                  />
                </b-form-group>
            
                <b-form-group
                  id="input-group-3"
                  class="col-md-6"
                  label="Final deadline:"
                  label-for="final_deadline"
                >
                  <datetime
                    v-model="form.final_deadline"
                    name="final_deadline"
                    value-zone="UTC"
                    type="datetime"
                    input-style="string"
                    format="DD HH:mm"
                  />
                </b-form-group>
            
                <b-form-group class="col-md-6">
                  <b-form-select
                    v-model="technologyId"
                    v-validate.continues="'required'"
                    :options="technologiesList"
                    name="technologies"
                    :class="{ 'is-invalid': errors.has('technologies') }"
                  >
                    <template slot="first">
                      <option :value="null" disabled>-- Please select technology --</option>
                    </template>
                  </b-form-select>
              
                  <span v-if="errors.has('technologies')" class="invalid-feedback">{{ errors.first('Technologies') }}</span>
                </b-form-group>
            
                <b-form-group class="col-md-6">
                  <b-form-select
                    v-model="typeId"
                    v-validate.continues="'required'"
                    :options="typ"
                    name="type"
                    :class="{ 'is-invalid': errors.has('type') }"
                  >
                    <template slot="first">
                      <option :value="null" disabled>-- Please select type of activity --</option>
                    </template>
                  </b-form-select>
                  <span v-if="errors.has('type')" class="invalid-feedback">{{ errors.first('Types') }}</span>
                </b-form-group>
              </b-form>
          
              <select v-model="form.public" name="Public">
                <option :value="true">Public</option>
                <option :value="false">Private</option>
              </select>
          
              <div class="text-center button">
                <b-btn
                  class="col-md-5 float-none d-inline-block btn btn-1 mt-2"
                  variant="warning"
                  block
                  pill
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
                  <b-button class="col-md-5 " variant="dark" @click="cancel">Cancel</b-button>
                  <b-button class="col-md-5 ml-3" variant="warning" @click="editActivity()">Save</b-button>
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
  import UserApi from '@/services/userDetailsApi';
  import { mapState } from 'vuex';
  import moment from 'moment';

  export default {
    data () {
      return {
        form: {
          name: '',
          description: '',
          application_deadline: '',
          final_deadline: '',
          status: 0,
          public: 'true',
          technologies: [],
          types: [],
        },

        technologyId: null,
        technologiesList: [
          {value: 11, text: 'Javascript'},
          {value: 12, text: 'Node.js'}
        ],
        typeId: null,
        typ: [
          {value: 11, text: 'dt audit'}
        ],
        edit: false
      };
    },
    computed:{
      ...mapState('account',['user']),
      userId(){
        return UserApi.getUserId()
      },
    },
    created () {
        ActivityService.getActivityDetails (this.$route.params.activityEditId).then ((response) => {
        this.form = response.data;
        this.form.application_deadline = moment (this.form.application_deadline).format ("YYYY-MM-DD HH:mm");
        this.form.final_deadline = moment (this.form.final_deadline).format("YYYY-MM-DD HH:mm");
        console.log(this.form);
      })
        .catch (error => {
          console.log (error)
        })
    },
    methods: {
      
      show(){
        this.$modal.show('edit-activity');
        
      },
      cancel () {
        this.$modal.hide('edit-activity');
        return this.edit = false
      },
      editActivity () {
        this.$modal.hide('edit-activity');
        let formClone = JSON.parse (JSON.stringify (this.form));
        formClone.application_deadline = moment (this.form.application_deadline).format ("X");
        formClone.final_deadline = moment (this.form.final_deadline).format ("X");
        formClone.technologies.push ({id: this.technologyId});
        formClone.types.push ({id: this.typeId});
          ActivityService.editActivity (this.$route.params.activityEditId, formClone).then ((response) => {
            alert('successful edited');
            this.$router.push ('/activity-list');
            this.edit = false;
          })
          .catch(error => {
          alert('your data are levie')
          });
      }
    }
  };
</script>
<style>

</style>

