<template>
  <div id="app" >
    <div>
      <v-header/>
      <v-sidebar v-if="this.$route.name !== 'login' && this.$route.name !== 'registration'"/>
      <v-layout/>
      <v-footer/>
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
