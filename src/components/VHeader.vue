<template>
  <header class="header-atributes">
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
          size="lg"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          right
        >
          <template slot="button-content">
            &#x1F464;
            <span class="user-dropdown">User</span>
          </template>
          <b-dropdown-item to="/profile">
            <font-awesome-icon icon="user" />Profile
          </b-dropdown-item>

          <b-dropdown-item to="/settings">
            <font-awesome-icon icon="cog" />Settings
          </b-dropdown-item>

          <b-dropdown-divider/>

          <b-dropdown-item to="/login">
            <font-awesome-icon icon="power-off" />Logout
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

<style>
.logo-icon {
  opacity: 1;
  display: block;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  width: 100px;
  padding: 1px;
  position: center;
}
.logo-icon:hover {
  opacity: 0.5;
}
.top-bar {
  width: 100%;
  height: 7px;
}

.inner {
  width: 100%;
  overflow: hidden;
  height: inherit;
}

.inner .top-bar-orange,
.inner .top-bar-violet,
.inner .top-bar-blue,
.inner .top-bar-green,
.inner .top-bar-bluesky {
  width: 20%;
  float: left;
  height: inherit;
}

.top-bar-orange {
  background: #f4835b;
}

.top-bar-violet {
  background: #555464;
}

.top-bar-blue {
  background: #69cde9;
}

.top-bar-green {
  background: #aabcbd;
}

.top-bar-bluesky {
  background: #9bd6e7;
}
.header-atributes {
  background: #2e2e2d;
  position: fixed;
  width: 100%;
  z-index: 999;
}
.user-dropdown {
  color: #fff !important;
  font-size: 80%;
}
</style>
