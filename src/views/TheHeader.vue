<template>
  <header class="header-attributes">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand to="/">
        <img
          class="logo-icon"
          src="../../public/img/logo.png"
          alt="Responsive image"
        >
      </b-navbar-brand>

      <b-navbar-nav small>
        <b-nav-item href="#">1.0.0</b-nav-item>
      </b-navbar-nav>

      <div class="ml-auto">
        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          right
        >
          <template slot="button-content">
            <b-img class="user mr-1" :src="avatars"/>

            <span class="user-dropdown text-capitalize">{{ userData.name }} {{ userData.surname }}</span>
          </template>

          <b-dropdown-item @click="$router.push({ name: 'profile', params: { userId: userData.id } })">
            <i class="fas fa-user mr-2"/>
            Profile
          </b-dropdown-item>

          <b-dropdown-item @click="$router.push({ name: 'edit', params: { userId: userData.id } })">
            <i class="fas fa-user-edit mr-1"/>
            Edit Profile
          </b-dropdown-item>

          <b-dropdown-item to="/settings">
            <i class="fas fa-cog mr-2"/>
            Settings
          </b-dropdown-item>

          <b-dropdown-divider/>

          <b-dropdown-item @click="onclick">
            <i class="fas fa-sign-out-alt mr-2"/>
            Logout
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </b-navbar>

    <div class="top-bar">
      <div class="inner">
        <div class="top-bar-orange"/>
        <div class="top-bar-violet"/>
        <div class="top-bar-blue"/>
        <div class="top-bar-green"/>
        <div class="top-bar-blueSky"/>
      </div>
    </div>
  </header>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapGetters } from 'vuex';
  import { apiDomain } from '@/constants/apiEndpoints';

  export default {
    data: () => ({
      userData: {
        id: null,
        avatar: {
          original: '',
          '200x200': '',
          '40x40': '',
        },
      },
    }),
    computed: {
      ...mapGetters('account', ['userId']),
      avatars: function() {
        let avatarUrl = (((this.userData || {}).avatar || {})['40x40'] || '');
        if (avatarUrl === '') {
          avatarUrl = '/img/person1.png';
        } else {
          avatarUrl = apiDomain + '/' + avatarUrl;
        }
        return avatarUrl;
      },
    },
    mounted() {
      UserApi.userInfo(this.userId).then((response) => {
        this.userData = response.data;
      });
    },
    methods: {
      onclick() {
        window.localStorage.removeItem('token');
        this.$toast.open({
          message: 'You\'ve been logged out!',
          type: 'error',
          position: 'top-right',
          duration: 3000,
          dismissible: true,
        });
        this.$router.push('/login');
      },
    },
  };
</script>
