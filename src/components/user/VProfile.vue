<template>
  <div class="edit profileCard home-content">
    <section id="card-outline">
      <b-container class="my-3 pt-4 text-center">
        <b-row class="md-5">
          <b-col>
            <h2 class="text-center">User Profile</h2>
          </b-col>

          <b-card class="col-12" border-variant="warning">
            <div class="text-right">
              <b-link to="/edit">
                Edit
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

              <h3 class="text-capitalize">{{ form.name }} {{ form.surname }}</h3>
              <h5>{{ form.position }} {{ seniorityList[form.seniority] }}</h5>

              <div class="text-left row">
                <h6 class="text-left ">Technologies:</h6>
                <b-list-group v-for="item in form.technologies" :key="item.id" horizontal class="text-left">
                  <h6 class="text-left col">{{ item.name }}</h6>
                </b-list-group>
              </div>

              <hr class="line">
              <div class="p-4">
                <b-link href="https://www.linkedin.com/in/evanyou/">
                  <i class="fab fa-linkedin"/>
                </b-link>
                <b-link class="ml-4" href="https://github.com/yyx990803">
                  <i class="fab fa-github"/>
                </b-link>
                <b-link class="ml-4" href="#">
                  <i class="fas fa-paper-plane"/>
                </b-link>
              </div>
            </div>
          </b-card>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapState } from 'vuex';

  export default {

    data: () => ({
      form: {
        id: null,
        email: '',
        position: '',
        seniority: '',
        name: '',
        surname: '',
        technologies: [
          {
            id: null,
            name: '',
          },
        ],
      },
    }),
    computed:{
      seniorityList:()=>['JUNIOR', 'MIDDLE', 'SENIOR'],
      ...mapState('account',['user']),
      userId(){
        return UserApi.getUserId()
      },
    },
    mounted() {
      UserApi.getUserId();
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
  };
</script>
