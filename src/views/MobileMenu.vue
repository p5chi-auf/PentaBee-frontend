<template>
  <div class="menu-position mobile-menu">
    <b-btn variant="dark" class="fas fa-bars col-12" @click="isActive= !isActive"/>
    <div v-if="!isActive" class="col-12 menu my-1">
      <b-nav vertical>
        <b-nav-item class="menu-items" to="/">
          <span class="menu-items">
            <i class="fa fa-home mr-1"/>Home
          </span>
        </b-nav-item>

        <b-nav-item class="menu-items" to="/team/:filter">
          <span class="menu-items">
            <i class="fas fa-users mr-1"/>Team
          </span>
        </b-nav-item>

        <b-nav-item class="menu-items" to="/activity-list/:filter">
          <span class="menu-items">
            <i class="fa fa-list mr-1"/>Activities
          </span>
        </b-nav-item>

        <b-nav-item class="menu-items" to="/activity-create">
          <span class="menu-items">
            <i class="fas fa-plus-circle mr-1"/>Create activity
          </span>
        </b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<style>
	.menu-position {
		background-color: #23272b;
		height: auto;
		width: auto;
		padding-top: 82px;
		margin-bottom: -80px;
	}

	.menu-items {
		color: white;
	}

	.menu-items:hover {
		opacity: 0.5;
	}

	.menu {
		height: 100%;
		position: fixed;
		background: #23272b;
	}
</style>

<script>
  export default {
    data: function() {
      return {
        isActive: true,
      };
    },
  };
</script>
