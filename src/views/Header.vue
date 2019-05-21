<template>
  <header>
    <div>
      <b-navbar class="navbar" toggleable="lg" type="dark">
        <b-navbar-brand to="/"><img src="../assets/logo.png"/></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">
              Home
            </b-nav-item>
            <b-nav-item to="/login">
              Login
            </b-nav-item>
          </b-navbar-nav>

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
              >
                Search
              </b-button>
            </b-nav-form>

            <b-nav-item-dropdown right>
              <template slot="button-content"
                ><em>
                  User
                </em></template
              >
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Settings
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Logout
              </b-dropdown-item>
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
    </div>
  </header>
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
</style>
