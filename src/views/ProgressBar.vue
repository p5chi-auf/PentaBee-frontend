<template>
  <div class="header">
    <div class="progress-container">
      <div class="progress-bar" style="background: rgba(255,218,0,0.61);" id="myBar"></div>
    </div>
  </div>
  
</template>
<script>
  export default {
    data(){
      return{
        value:0
      }
    },
    methods:{
      scrollBar(){
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById ("myBar").style.width = scrolled + "%";
      },
      deleteScrollBar(){
        document.getElementById ("myBar").style.width = 0 + "%";
        
      }
    },
    created () {
      window.addEventListener('scroll', this.scrollBar);
    },
    destroyed () {
      window.removeEventListener('scroll', this.deleteScrollBar);
    }
  }
</script>
<style>
  .header {
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: transparent;
  }
  .progress-container {
    width: 100%;
    height: 8px;
    background: transparent;
  }
  
  .progress-bar {
    height: 8px;
    width: 0%;
  }
</style>

