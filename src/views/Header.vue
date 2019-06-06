<template>
  <header>
      <b-navbar class="navbar" toggleable="lg" type="dark">
        <b-navbar-brand to="/">
          <img class="img" src="../../public/img/logo.png" />
        </b-navbar-brand>

<!--        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>-->

<!--        <b-collapse id="nav-collapse" is-nav>-->

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template slot="button-content">
                User
              </template>
              <b-dropdown-item to="/profile">
                <font-awesome-icon icon="user" />
                &nbsp;Profile
              </b-dropdown-item>
              <b-dropdown-item to="/settings">
                <font-awesome-icon icon="cog" />
                &nbsp;Settings
              </b-dropdown-item>
              <b-dropdown-item to="/login">
                <font-awesome-icon icon="power-off" />
                &nbsp;Logout
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
<!--        </b-collapse>-->
      </b-navbar>
      <div class="top-bar">
        <div class="inner">
          <div class="top-bar-orange"></div>
          <div class="top-bar-violet"></div>
          <div class="top-bar-blue"></div>
          <div class="top-bar-green"></div>
          <div class="top-bar-bluesky"></div>
        </div>
      </div>
  </header>
</template>

