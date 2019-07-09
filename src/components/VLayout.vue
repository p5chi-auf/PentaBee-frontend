<template>
  <div
    class="container-fluid main"
    :class="{ 'main--active': !sideBarIsActive }"
  >
    <progress-bar/>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProgressBar from '../views/ProgressBar';
export default {
  components:{
    ProgressBar
  },
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
