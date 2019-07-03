<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Disponibile" active>
          <b-card-group deck >
            <b-card bg-variant="light" border-variant="warning" class="col-md-4 mx-auto cards" @click="getInfo">
              <b-card-text class="project-name">
                Project: {{name}}
              </b-card-text>
              
              <b-card-text>
                Description: {{description}}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-tab>
        
        <b-tab title="Aplicate">
          <b-card-group deck class="stile-b-card">
            <b-card bg-variant="light" border-variant="warning" class="col-md-4 mx-auto cards" @click="getInfo">
              <b-card-text class="project-name">
                Project: {{name}}
              </b-card-text>
              
              <b-card-text>
                Description: {{description}}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-tab>
        
        <b-tab title="Terminate" active>
          <b-card-group deck class="stile-b-card">
            <b-card bg-variant="light" border-variant="warning" class="col-md-4 mx-auto cards" @click="getInfo">
              <b-card-text class="project-name">
                Project: {{name}}
              </b-card-text>
              
              <b-card-text>
                Description: {{description}}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-tab>
        
        <b-tab title="Ale mele" active>
          <b-card-group deck class="stile-b-card">
            <b-card bg-variant="light" border-variant="warning" class="col-md-4 mx-auto cards" @click="getInfo">
              <b-card-text class="project-name">
                Project: {{name}}
              </b-card-text>
              
              <b-card-text>
                Description: {{description}}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-tab>
      </b-tabs>
    </b-card>
  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: 1,
        name: 'PentaBee',
        description: 'Website for interconnection of all software developers, who need help or who can help with activities.',
        status: 0,
      }
    },
    methods: {
      getInfo () {
        this.$router.push ('/activity');
      }
    }
  }
</script>
<style>
  .cards:hover {
    cursor: pointer;
  }
</style>

