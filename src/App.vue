<template>
  <div id="app">
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-brand to="/"><img src="/all.png"/></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/second">Second page</b-nav-item>
          <b-nav-item to="/footer">Footer</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button
              variant="outline-warning"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              >Search</b-button
            >
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">FR</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">RO</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content"
              ><em>User</em></template
            >
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!--    5 color bar-->
    <div class="top-bar">
      <div class="inner">
        <div class="top-bar-orange"></div>
        <div class="top-bar-violet"></div>
        <div class="top-bar-blue"></div>
        <div class="top-bar-green"></div>
        <div class="top-bar-bluesky"></div>
      </div>
    </div>
    <!--    /5 color bar-->
    <br />
    <router-view />
    <!--    Footer-->
    <footer toggleable="lg" type="dark">
      <div class="footer">
        <p>
          Copyright {{ new Date().getFullYear() }} &copy; PentaBee. All Rights
          Reserved. Privacy Policy
        </p>
      </div>
    </footer>
    <!--    /Footer-->
  </div>
</template>

<style>
img {
  width: 100px;
  padding: 1px;
  position: center;
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
.navbar {
  background: #1b1d1e;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background: #1b1d1e;
}
</style>
