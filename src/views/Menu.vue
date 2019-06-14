<template>
<div class="menu">
		<div v-if="isActive " class=" col-md-12 menu">
      <b-navbar toggleable="lg" type="dark">
        <b-nav vertical>
          <b-nav-item class="menu-items" to="/">
					<span>
						<font-awesome-icon class="fa-lg menu-icons" icon="home"/>
						&nbsp;Home
					</span>
            
            <hr>
          </b-nav-item>
          
          <b-nav-item class="menu-items" to="/login">
					<span>
						<font-awesome-icon class="fa-lg menu-icons" icon="sign-in-alt"/>
						&nbsp;Login
					</span>
            
            <hr>
          </b-nav-item>
          
          <b-nav-item class="menu-items" to="/registration">
					<span>
						<font-awesome-icon class="fa-lg menu-icons" icon="pencil-alt"/>
						&nbsp;Registration
					</span>
            
            <hr>
          </b-nav-item>
        </b-nav>
      </b-navbar>
		</div>
  <b-btn  @click="isActive= !isActive" class="button-position" ><font-awesome-icon class="fa-lg" icon="arrows-alt-h"/></b-btn>
</div>
</template>

<style>
  
  .menu{
    background-color: #323231;
    height: auto;
		width: auto;
    top: 0;
    left:0;
  
}

  .button-position{
    position: relative;
    top: 0%;
    left: 0;
    width: 100%;
  }

  span {
    color: white;
  }
  span:hover {
    opacity: 0.5;
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
