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
            <img class="user mr-1" src="../../public/img/person1.png" alt="user image">
            <span style="text-transform:capitalize" class="user-dropdown">
              {{ form.name }} {{ form.surname }}
            </span>
          </template>

          <b-dropdown-item to="/profile">
            <i class="fas fa-user"/>
            Profile
          </b-dropdown-item>

          <b-dropdown-item to="/edit">
            <i class="fas fa-user-edit"/>
            Edit Profile
          </b-dropdown-item>

          <b-dropdown-item to="/settings">
            <i class="fas fa-cog"/>
            Settings
          </b-dropdown-item>

          <b-dropdown-divider/>

          <b-dropdown-item @click="onclick">
            <i class="fas fa-sign-out-alt"/>
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
        <div class="top-bar-bluesky"/>
      </div>
    </div>
  </header>
</template>

<script>
  import UserApi from '@/services/userDetailsApi';

  export default {
    data: () => ({
      form: {}
    }),
    computed: {
      userId(){
        return UserApi.getUserId()
      }
    },
    mounted() {
      UserApi.userInfo(this.userId).then((response) => {
        this.form = response.data;
      }).catch(error => {
        console.log(error);
      });
    },
    methods: {
      onclick () {
        window.localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
  };
</script>
