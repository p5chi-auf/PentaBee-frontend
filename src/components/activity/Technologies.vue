<template>
  <multiselect
    v-model="technologies"
    placeholder="Search a technology"
    label="name"
    track-by="id"
    :options="formTechnologies"
    :multiple="true"
    :taggable="true"
    @input="updateTechnologies($event)"
  />
</template>

<script>
  import UserApi from '@/services/userDetailsApi';

  export default {
    model: {
      prop: 'technologies',
      event: 'changeTechnologiesList'
    },
    props: { technologies: Array },
    data() {
      return {
        formTechnologies: [],
        selectedTechnologies: []
      }
    },
    mounted() {
      this.selectedTechnologies = this.technologies;
      UserApi.getTechnologies()
        .then((response) => {
        this.formTechnologies = response.data;
      })
    },
    methods: {
      updateTechnologies(technologies) {
        this.$emit('changeTechnologiesList', technologies);
      }
    }
  }
</script>
