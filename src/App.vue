<template>
  <div id="app">
    <div>
      <v-header
        v-if="
          $route.name !== 'login' && $route.name !== 'registration'
        "
      />
      <v-sidebar
        v-if="
          $route.name !== 'login' && $route.name !== 'registration'
        "
      />
      <router-view
        v-if="$route.name !== 'home' && $route.name !== 'profile'"
      />
      <v-layout
        v-if="
          $route.name !== 'login' && $route.name !== 'registration'
        "
      />
      <v-footer />
    </div>
  </div>
</template>

<script>
import VHeader from '@/views/VHeader';
import VFooter from '@/views/VFooter';
import VSidebar from '@/components/VSidebar';
import VLayout from '@/components/VLayout';

export default {
  components: {
    VHeader,
    VFooter,
    VSidebar,
    VLayout,
  },
};
</script>
