<template>
  <div id="app">
    <v-header />
    <v-sidebar />
    <v-layout />
    <v-footer />
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
