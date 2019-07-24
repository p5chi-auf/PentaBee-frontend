<template>
  <div class="edit profileCard home-content">
    <h2 class="text-center my-2 mb-4">User Profile</h2>
    <section id="card-outline" class="ml-4 text-center">

      <b-card class="col-lg-6 col-md-6 col-xs-12" border-variant="warning">
        <div class="text-right">
          <b-link to="/edit">
            <i v-b-tooltip.hover title="Edit profile" class="icon-size fas fa-edit"/>
          </b-link>
        </div>
        <div class="card-body">
          <div class="d-flex justify-content-center h-100">
            <div class="image-out-container">
              <div class="greenIcon"/>

              <div class="image-in-container">
                <b-img :src="require('../../../public/img/person1.png')"/>
              </div>
            </div>
          </div>

          <h3 class="mt-1">{{ form.name }} {{ form.surname }}</h3>
          <h6 class="seniorityText mt-2">{{ form.position }} {{ seniorityList[form.seniority] }}</h6>
          <hr class="line">
          <p>{{ form.biography }}</p>
          <h5 class="text-center">Skills:</h5>
          <div class="text-left row">
            <b-list-group v-for="item in form.technologies" :key="item.id" horizontal class="text-left">
              <div class="box text-left">{{ item.name }}</div>
            </b-list-group>
          </div>
          <h6 class="text-left my-3 row">
            <i class="fas fa-envelope"/>
            <b-link class="ml-2">{{ form.email }}</b-link>
            <i class="ml-2 fas fa-map-marker-alt"/>
            <p class="ml-2">CHI</p>
          </h6>
        </div>
      </b-card>
    </section>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapState, mapGetters } from 'vuex';

  export default {
    data: () => ({
      form: {
        id: null,
        email: '',
        position: '',
        seniority: '',
        name: '',
        surname: '',
        biography: '',
        technologies: [
          {
            id: null,
            name: '',
          },
        ],
      },
    }),
    computed: {
      seniorityList: () => ['JUNIOR', 'MIDDLE', 'SENIOR'],
      ...mapState('account', ['user']),
      ...mapGetters('account', ['userId']),
    },
    mounted() {
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
      }).catch(error => {
        console.log(error);
      });
    }
  };
</script>
