<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="logo">
        <img
          class="logo-loader"
          src="../../public/img/logo.png"
          alt="Responsive image"
        >
        <p class="text-center loading-text">Welcome!</p>

        <div class="circles">
          <div class="circle"/>
          <div class="circle"/>
          <div class="circle"/>
          <div class="circle"/>
          <div class="circle"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Preloader',
    data(){
      return {
        show: true
      }
    },
    mounted() {
      this.showToggle()
    },
    methods: {
      showToggle(){
        setTimeout(() => {
          this.show = false
          }, 1000)
      }
    }
  }
</script>
