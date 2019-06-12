<template>
<div class="menu">	<b-btn  @click="isActive= !isActive" class="button-position"><font-awesome-icon class="fa-lg" icon="arrows-alt-h"/></b-btn>
		<div v-if="isActive " class=" col-md-12 menu">
			<b-nav vertical id="mounted()">
				<b-navbar-nav >
					<b-nav-item to="/">
						Home
					</b-nav-item>
					
					<b-nav-item to="/login">
						Login
					</b-nav-item>
					
					<b-nav-item to="/registration">
						Registration
					</b-nav-item>
				</b-navbar-nav>
			</b-nav>
		</div>
</div>
</template>

<style>
  
  .menu{
    background-color: #323231;
    height: auto;
		width: auto;
}

  .button-position{
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
<script>
	export default {
	data: function(){
		return{
			isActive:true
		}
	}
	}
</script>
