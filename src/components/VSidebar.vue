<template>
  <sidebar-menu :menu="menu" :collapsed="sideBarIsActive" width="175px" @collapse="triggerSidebar"/>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    SidebarMenu
  },
  computed: {
    menu: () => [
      {
        header: true,
        title: 'PentaBee Navigation'
      },
      {
        href: '/',
        title: 'Home',
        icon: 'fa fa-home'
      },
      {
        href: '/activity-list/:filter',
        title: 'Activities',
        icon: 'fa fa-list',
        child: [
          {
            href: '/activity-create',
            title: 'Create',
            icon: 'fas fa-plus-circle'
          }
          ]
      },
    ],
      ...mapState('aside', ['sideBarIsActive'])
  },
  mounted(){
    this.setSidebarState(true);
  },
  methods: {
    ...mapActions('aside', ['triggerSidebar', 'setSidebarState']),
  },
};
</script>
