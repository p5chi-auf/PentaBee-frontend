<template>
  <div>
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
                      v-validate.continues="'required|min:3|max:50'"
                      name="name"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.has('name') }"
              />
              
              <span v-if="errors.has('name')" class="invalid-feedback">{{
                errors.first('name')
              }}</span>
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
                      v-validate.continues="'required|min:3'"
                      name="description"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': errors.has('description') }"
              />
              
              <span v-if="errors.has('description')" class="invalid-feedback">
                {{errors.first('description')}}
              </span>
            </b-form-group>
            
            <b-form-group
                    id="input-group-3"
                    class="col-md-6"
                    label="Application deadline:"
                    label-for="application_deadline"
            >
              <b-form-input
                      id="application_deadline"
                      v-model="form.application_deadline"
                      v-validate.continues="'required'"
                      name="application_deadline"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.has('application_deadline') }"
              />
            </b-form-group>
            
            <b-form-group
                    id="input-group-3"
                    class="col-md-6"
                    label="Final deadline:"
                    label-for="final_deadline"
            >
              <b-form-input
                      id="final_deadline"
                      v-model="form.final_deadline"
                      v-validate.continues="'required'"
                      name="final_deadline"
                      type="date"
                      class="form-control"
                      :class="{ 'is-invalid': errors.has('final_deadline') }"
              />
            </b-form-group>
            
            <b-form-group class="col-md-6">
              <b-form-select v-model="form.technologies.id" :options="options"></b-form-select>
            </b-form-group>
            
            <b-form-group class="col-md-6">
              <b-form-select v-model="types" :options="typ"></b-form-select>
            </b-form-group>
          </b-form>
          
          <div class="text-center button">
            <b-btn
                    class="col-md-5 float-none d-inline-block btn btn-1 mt-2"
                    variant="warning"
                    block
                    pill
                    @click="registerIt()"
            >Create your account
            </b-btn>
          </div>
          
          <p class="text-center">
            Already have a
            <b-link class="link-redirect">PentaBee</b-link>
            account?
            <b-link class="link-redirect" to="/login">Log in</b-link>
          </p>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import RegisterService from '../../services/ActivityApi';

  export default {
    data () {
      return {
        form: {
          name: '',
          description: '',
          application_deadline: '',
          final_deadline: '',
          status: 0,
          technologies: [
            {
              id: null
            }
          ],
          types: [
            {id: null}
          ],
        },
        id: null,
        options: [
          {value: null, text: 'Please select some item'},
          {value: 11, text: 'Javascript'},
          {value: 12, text: 'Node.js'}
        ],
        types: null,
        typ: [
          {value: null, text: 'Please select some item'},
          {id: 11, text: 'dt audit'}
        ]

      };
    },
    methods: {
      registerIt () {
        console.log (this.form);
        RegisterService.createActivity (this.form)

      },
    },
  };
</script>

