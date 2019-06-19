<template>
  <div id="menu" >
    <b-nav  id="show-element">
      <b-nav-item to="/">
        <font-awesome-icon class="menu-items fa-lg menu-icons" icon="home"/>
          <span v-if="isActive"  class=" menu-items">
						&nbsp;Home
					</span>
      </b-nav-item>
      
      <b-nav-item to="/login">
        <font-awesome-icon class="menu-items fa-lg menu-icons" icon="sign-in-alt"/>
          <span v-if="isActive"  class="menu-items-more menu-items">
						&nbsp;Login
					</span>
      </b-nav-item>
      
      <b-nav-item to="/registration">
        <font-awesome-icon class="menu-items fa-lg menu-icons" icon="pencil-alt"/>
          <span v-if="isActive"  class="menu-items">
						&nbsp;Registration
					</span>
      </b-nav-item>
    </b-nav>

    <div class="display-desktop">
      <b-btn @click="isActive = !isActive"  class="col-md-12">
        <font-awesome-icon class="fa-lg" icon="arrows-alt-h"/>
      </b-btn>
    </div>

    <div class="display-mobile">
      <b-btn @click="showMenuMobile()"  class="col-md-12 ">
        <font-awesome-icon class="fa-lg" icon="arrows-alt-h"/>
      </b-btn>
    </div>
  </div>
</template>

<style>
  @media screen  and (min-width: 601px) {
    
    #menu {
      background-color: #323231;
      width: auto;
    }
    
    #show-element {
      display: block;
    }
    
    .menu-items {
      color: white;
      display: inline;
    }
    
    .menu-items:hover {
      opacity: 0.5;
    }
    
    .display-desktop{
      display: block;
    }
    
    .display-mobile{
      display: none;
    }
  }
  
  @media screen  and (max-width: 600px) {
    #menu {
      background-color: #323231;
      width: 100%;
    }
    
    #show-element {
      display: none;
      
    }
  
    .menu-items {
      color: white;
      display: inline;
    }
    
    .display-desktop{
      display: none;
    }
    
    .display-mobile{
      display: block;
    }
  }
</style>

<script>
    export default {
        data: function () {
            return {
                isActive: false,
                showMenu: true
            }
        },

        methods:{
            showMenuMobile : function(){
                let menu = document.getElementById("show-element");

                if (menu.style.display === "none") {
                    this.isActive = true;
                    menu.style.display = "block";

                }
                else {
                    menu.style.display = "none";

                }

            }
        }
    }
</script>
