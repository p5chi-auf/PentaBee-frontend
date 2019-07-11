<!--<template>-->
<!--  <div>-->
<!--    &lt;!&ndash;    <b-form-group&ndash;&gt;-->
<!--    &lt;!&ndash;      id="input-group-7"&ndash;&gt;-->
<!--    &lt;!&ndash;      class="col-md-12"&ndash;&gt;-->
<!--    &lt;!&ndash;      label="Technologies"&ndash;&gt;-->
<!--    &lt;!&ndash;      label-for="technologies"&ndash;&gt;-->
<!--    &lt;!&ndash;    >&ndash;&gt;-->
<!--    &lt;!&ndash;      <b-form-input&ndash;&gt;-->
<!--    &lt;!&ndash;        id="position"&ndash;&gt;-->
<!--    &lt;!&ndash;        name="position"&ndash;&gt;-->
<!--    &lt;!&ndash;        type="text"&ndash;&gt;-->
<!--    &lt;!&ndash;        class="form-control"&ndash;&gt;-->
<!--    &lt;!&ndash;        style="text-transform:uppercase"&ndash;&gt;-->
<!--    &lt;!&ndash;      />&ndash;&gt;-->
<!--    &lt;!&ndash;    </b-form-group>&ndash;&gt;-->
<!--    &lt;!&ndash;    <b-form-group>&ndash;&gt;-->
<!--    &lt;!&ndash;      <h6 class="text-left ">Technologies:</h6>&ndash;&gt;-->
<!--    &lt;!&ndash;      <b-list-group v-for="item in form.technologies" :key="item.id" horizontal class="text-left">&ndash;&gt;-->
<!--    &lt;!&ndash;        <h6 class="text-left col">{{ item.name }}</h6>&ndash;&gt;-->
<!--    &lt;!&ndash;      </b-list-group>&ndash;&gt;-->
<!--    &lt;!&ndash;    </b-form-group>&ndash;&gt;-->
<!--    &lt;!&ndash;    <div class="text-center row">&ndash;&gt;-->
<!--    &lt;!&ndash;      <h6 class="text-center ">Technologies:</h6>&ndash;&gt;-->
<!--    &lt;!&ndash;      <b-list-group v-for="item in form" :key="item.id" horizontal>&ndash;&gt;-->
<!--    &lt;!&ndash;        <h6 class="text-left col">{{ item.name }}</h6>&ndash;&gt;-->
<!--    &lt;!&ndash;      </b-list-group>&ndash;&gt;-->
<!--    &lt;!&ndash;    </div>&ndash;&gt;-->
<!--    <p>dfghjkl;</p>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  // import UserApi from '@/services/userDetailsApi';-->
<!--  // import { mapState } from 'vuex';-->
<!--  //-->
<!--  // export default {-->
<!--  //-->
<!--  //   data: () => ({-->
<!--  //     form: [{-->
<!--  //     }],-->
<!--  //   }),-->
<!--  //   computed:{-->
<!--  //     ...mapState('account',['user']),-->
<!--  //     userId(){-->
<!--  //       return this.user && this.user.id || UserApi.getUserDetails()-->
<!--  //     },-->
<!--  //   },-->
<!--  //   mounted() {-->
<!--  //     UserApi.getUserDetails();-->
<!--  //     UserApi.getTechnologies(this.userId).then((response) => {-->
<!--  //       this.form = response.data;-->
<!--  //     }).catch(error => {-->
<!--  //       console.log(error);-->
<!--  //     });-->
<!--  //   },-->
<!--  // };-->
<!--</script>-->

<!-- Vue component -->
<template>
  <div class="text-center">
    <br><br><br><br>
    <multiselect v-model="value" :options="options"/>
    <br><br><br><br>
  </div>
</template>

<script>
  import Vue from 'vue';

  Vue.use(Multiselect);

  import Multiselect from 'vue-multiselect'

  // register globally
  Vue.component('multiselect', Multiselect)

  export default {
    // OR register locally
    components: { Multiselect },
    data () {
      return {
        value: null,
        options: ['list', 'of', 'options']
      }
    }
  }
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  /*your styles*/
</style>
