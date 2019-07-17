<template>
  <div class="edit">
    <div class="profileCard home-content">
      <section id="card-outline">
        <b-container class="col-md-8">
          <b-row align-h="center" class="mt-5">
            <b-card class="p-3">
              <h4 class="text-center">
                Create an activity
                <hr>
              </h4>

              <b-form class="row" @submit.prevent="createActivity()">
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
                      <option :value="null" disabled>-- Please select your seniority --</option>
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
                      <option :value="null" disabled>-- Please select your seniority --</option>
                    </template>
                  </b-form-select>

                  <span v-if="errors.has('type')" class="invalid-feedback">{{ errors.first('Types') }}</span>
                </b-form-group>
              </b-form>

              <label>
                <select v-model="form.public" name="Public">
                  <option value="true">Public</option>
                  <option value="false">Private</option>
                </select>
              </label>

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
  import RegisterService from '../../services/ActivityApi';
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
          public: true,
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
        ]

      };
    },
    methods: {
      createActivity () {
        let activity = JSON.parse (JSON.stringify (this.form));
        activity.application_deadline = moment (this.form.application_deadline).format ("X");
        activity.final_deadline = moment (this.form.final_deadline).format ("X");
        activity.technologies.push ({id: this.technologyId});
        activity.types.push ({id: this.typeId});
        RegisterService.createActivity (activity)
      }
    }
  };
</script>
