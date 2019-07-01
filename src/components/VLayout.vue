<template>
  <div
    class="container-fluid main"
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
  padding-left: 180px;
}
</style>
