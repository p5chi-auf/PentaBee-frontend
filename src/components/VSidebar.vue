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
        href: '/activity-list',
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
  },
  methods: {
    ...mapActions('aside', ['triggerSidebar']),
  },
};
</script>
