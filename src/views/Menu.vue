<template>
	<div class="menu">
		<b-btn  @click="isActive= !isActive" class="button-position">
			<font-awesome-icon class="fa-lg" icon="arrows-alt-h"/>
		</b-btn>

		<div v-if="isActive" class="col-md-12 menu">
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

		<div v-else="isInactive" class="col-md-12 menu">
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
	</div>
</template>

<style>
	.menu{
		background-color: #2e2e2d;
		height: auto;
		width: auto;
	}
	.button-position{
		position: relative;
		bottom: 100px;
		left: 0;
		width: 100%;
	}
	.menu-items {
		color: white;
	}
	.menu-items:hover {
		opacity: 0.5;
	}
</style>

<script>
  export default {
    data: function(){
      return{
        isActive:false,
				isInactive: true
      }
    }
  }
</script>
