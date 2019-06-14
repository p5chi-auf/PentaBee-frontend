<template>
	<div class="menu-position">
		<b-btn @click="isActive= !isActive" class="button-position">
			<font-awesome-icon class="fa-lg" icon="arrows-alt-h"/>
		</b-btn>

		<div class="col-md-12 menu" v-if="isActive">
			<b-nav vertical>
				<b-nav-item to="/">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="home"/>
					</span>
				</b-nav-item>

				<b-nav-item to="/login">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="sign-in-alt"/>
					</span>
				</b-nav-item>

				<b-nav-item to="/registration">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="pencil-alt"/>
					</span>
				</b-nav-item>
			</b-nav>
		</div>

		<div class="col-md-12 menu" v-else="!isActive">
			<b-nav vertical>
				<b-nav-item to="/">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="home"/>
						&nbsp;Home
					</span>
				</b-nav-item>

				<b-nav-item to="/login">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="sign-in-alt"/>
						&nbsp;Login
					</span>
				</b-nav-item>

				<b-nav-item to="/registration">
					<span class="menu-items">
						<font-awesome-icon class="fa-lg menu-icons" icon="pencil-alt"/>
						&nbsp;Registration
					</span>
				</b-nav-item>
			</b-nav>
		</div>
	</div>
</template>

<style>

	.menu-position {
		background-color: #323231;
		height: auto;
		width: auto;
	}

	.button-position {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
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
		background: #2e2e2d;
	}
</style>

<script>
  export default {
    data: function () {
      return {
        isActive: true
      }
    }
  }
</script>

