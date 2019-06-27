<template>
  <div
    class="main container-fluid"
    :class="{ 'main--active': !sideBarIsActive }"
  >
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('aside', ['sideBarIsActive']),
  },
};
</script>

<style scoped>
.main--active {
  padding-left: 200px;
}
</style>
