<template>
  <div id="app">
    <v-header />
    <v-sidebar />
    <v-layout/>
    <v-footer />
  </div>
</template>

<script>
import VHeader from '@/components/VHeader';
import VFooter from '@/components/VFooter';
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
