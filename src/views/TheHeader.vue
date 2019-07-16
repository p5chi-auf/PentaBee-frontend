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
        <b-nav-item href="#">version 1.0.0</b-nav-item>
      </b-navbar-nav>
      <div class="ml-auto">
        <b-dropdown
          toggle-class="text-decoration-none"
          no-caret
          right
          size="sm"
        >
          <template slot="button-content">
            <i class="far fa-bell notification"/>
          </template>
          <b-dropdown-item>
            Lorem ipsum dolor sit amet.
          </b-dropdown-item>
        </b-dropdown>

        <b-dropdown
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          right
        >
          <template slot="button-content">
            <img class="user mr-1" src="../../public/img/person1.png">
            <span class="user-dropdown">{{ form.name }} {{ form.surname }}</span>
          </template>
          <b-dropdown-item to="/profile">
            <i class="fas fa-user"/> Profile
          </b-dropdown-item>

          <b-dropdown-item to="/edit">
            <i class="fas fa-user-edit"/> Edit Profile
          </b-dropdown-item>

          <b-dropdown-item to="/settings">
            <i class="fas fa-cog"/> Settings
          </b-dropdown-item>

          <b-dropdown-divider/>

          <b-dropdown-item @click="onclick">
            <i class="fas fa-sign-out-alt"/> Logout
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
        <div class="top-bar-bluesky"/>
      </div>
    </div>
  </header>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';
  import { mapActions, mapState } from 'vuex';

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
      ...mapState('account',['user']),
      userId(){
        return UserApi.getUserDetails()
      },
    },
    mounted() {
      UserApi.getUserDetails();
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
      })
    },
    methods: {
      ...mapActions('account',['logout']),
      onclick () {
        this.$router.push('/login');
        this.logout();
      }
    }
  };
</script>

<style>
  .notification{
    color: #ffda00;
  }
</style>
