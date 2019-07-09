<template>
  <div class="profileCard home-content">
    <section id="userProfile">
      <b-container class="my-3 py-4 text-center">
        <b-row class="md-5">
          <b-col>
            <h2 class="text-center">User Profile</h2>
          </b-col>
          <b-card class="col-lg-12 col-md-12">
            <div class="card-body">
              <div class="d-flex justify-content-center h-100">
                <div class="image-out-container">
                  <div class="greenIcon"/>
                  <div class="image-in-container">
                    <b-img :src="require('../../../public/img/person1.png')"/>
                  </div>
                </div>
              </div>
              <h3>{{ form.name }} {{ form.surname }}</h3>
              <h5>{{ form.position }} {{ seniorityList[form.seniority] }}</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cumque delectus ipsum iure
                laborum libero, magni mollitia, necessitatibus nihil officia omnis possimus provident quaerat quisquam
                recusandae, similique sit temporibus?
              </p>
              <div class="text-left row">
                <h6 class="text-left ">Technologies:</h6>
                <b-list-group v-for="item in form.technologies" :key="item.id" horizontal
                              class="text-left"
                >
                  <h6 class="text-left col">{{ item.name }}</h6>
                </b-list-group>
              </div>
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
        return this.user && this.user.id || 92
      },
    },
    mounted() {
      UserApi.getUserDetails();
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
  };
</script>
