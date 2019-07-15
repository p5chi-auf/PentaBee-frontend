<template>
  <sidebar-menu :menu="menu" width="175px" @collapse="triggerSidebar"/>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import { mapActions } from 'vuex';

export default {
  components: {
    SidebarMenu
  },
  data() {
    return {
      isActive: false,
      showMenu: true
    };
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
        href: '/charts',
        title: 'Activity',
        icon: 'fa fa-cog',
        child: [
          {
            href: '/ActivityList',
            title: 'List',
            icon: 'fa fa-list'
          },
          {
            href: '/activityCreate',
            title: 'Create',
            icon: 'fa fa-list'
          }
          ]
      },
    ],
  },
  methods: {
    ...mapActions('aside', ['triggerSidebar']),
  },
};
</script>
