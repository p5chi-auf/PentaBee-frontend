<template>
  <div id="app">
    <preloader/>
    <template v-if="!isAuth">
      <v-header/>
      <v-layout/>
      <v-sidebar/>
      <v-footer/>
    </template>
    <template v-else>
      <router-view/>
    </template>
  </div>
</template>

<script>
  import VHeader from '@/views/TheHeader';
  import VFooter from '@/views/TheFooter';
  import VSidebar from '@/components/VSidebar';
  import VLayout from '@/components/VLayout';
  import Preloader from '@/components/Preloader.vue'

  export default {
    components: {
      VHeader,
      VFooter,
      VSidebar,
      VLayout,
      Preloader
    },
    computed: {
      isAuth() {
        const { name } = this.$route;
        return name === 'login' || name === 'registration' || name === 'notfound';
      }
    }
  }
</script>
