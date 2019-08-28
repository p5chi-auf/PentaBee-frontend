<template>
  <div class="edit profile-card home-content row">
    <div class="col-lg-6 col-md-6 col-xs-12">
      <h2 class="text-center ml-2 my-4 profile-title">Profile</h2>
      <section id="card-outline" class="ml-2 mr-2 mb-1 text-center">
        <b-card border-variant="warning">
          <div class="text-right">
            <b-link @click="$router.push({ name: 'edit', params: { userId: profileData.id } })">
              <i v-b-tooltip.hover title="Edit profile" class="icon-size fas fa-edit"/>
            </b-link>
          </div>

          <div class="card-body">
            <div class="d-flex justify-content-center h-100">
              <div class="image-out-container">
                <div class="image-in-container">
                  <b-img :src="avatarImage"/>
                </div>
              </div>
            </div>

            <h3 class="mt-1">{{ profileData.name }} {{ profileData.surname }}</h3>

            <h6 class="seniority-text mt-2 text-uppercase">
              {{ profileData.position }} {{ seniorityList[profileData.seniority] }}
            </h6>

            <hr class="line">

            <p>{{ profileData.biography }}</p>

            <h5 class="text-center">Skills:</h5>

            <div class="text-left row">
              <b-list-group v-for="item in profileData.technologies" :key="item.id" horizontal class="text-left">
                <div class="box text-left">{{ item.name }}</div>
              </b-list-group>
            </div>

            <div class="text-center my-3 row">
              <div class="mb-2">
                <i class="fas fa-envelope ml-2 mr-1"/>{{ profileData.email }}
              </div>

              <div class="mb-2">
                <i class="fas fa-map-marker-alt ml-2 mr-1"/>{{ profileData.location }}
              </div>
            </div>
          </div>
        </b-card>
      </section>
    </div>
    <activities/>
  </div>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapState, mapGetters } from 'vuex';
  import Activities from './UserActivities';
  import { basePath } from '@/constants/apiEndpoints';

  export default {
    components: { Activities },
    data: () => ({
      profileData: {
        id: null,
        email: '',
        position: '',
        seniority: '',
        name: '',
        surname: '',
        biography: '',
        location: '',
        technologies: [
          {
            id: null,
            name: '',
          },
        ],
        avatar: {
          '200x200': '',
        },
      },
      avatarImage: null,
    }),
    computed: {
      seniorityList: () => ['JUNIOR', 'MIDDLE', 'SENIOR'],
      ...mapState('account', ['user']),
      ...mapGetters('account', ['userId'])
    },
    mounted() {
      UserApi.userInfo(this.userId)
        .then((response) => {
          this.profileData = response.data;

          if (this.profileData.avatar) {
            this.avatarImage = basePath + '/' + this.profileData.avatar['200x200'];
          } else {
          this.avatarImage = '/img/person1.png';
        }
      });
    }
  }
</script>
