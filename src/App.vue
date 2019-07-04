<template>
  <div id="app">
    <div>
      <template v-if="!isAuth">
        <v-header />
        <v-layout />
        <v-sidebar />
        <v-footer />
      </template>
      <template v-else>
        <router-view />
      </template>
    </div>
  </div>
</template>

<script>
import VHeader from '@/views/TheHeader';
import VFooter from '@/views/TheFooter';
import VSidebar from '@/components/VSidebar';
import VLayout from '@/components/VLayout';

export default {
  components: {
    VHeader,
    VFooter,
    VSidebar,
    VLayout,
  },
  computed: {
    isAuth() {
      const { name } = this.$route;
      return name === 'login' || name === 'registration' || name === 'error';
    },
  },
};
</script>
