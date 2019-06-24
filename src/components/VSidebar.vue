<template>
  <sidebar-menu :menu="menu" width="200px" @collapse="triggerSidebar"/>
</template>

<script>
import { SidebarMenu } from 'vue-sidebar-menu';
import { mapActions } from 'vuex';

export default {
  components: {
    SidebarMenu,
  },
  data() {
    return {
      isActive: false,
      showMenu: true,
    };
  },
  computed: {
    menu: () => [
      {
        header: true,
        title: 'Main Navigation',
      },
      {
        href: '/',
        title: 'Home',
        icon: 'fa fa-home',
      },
      {
        href: '/registration',
        title: 'Registration',
        icon: 'fa fa-pencil-alt',
      },
      {
        href: '/login',
        title: 'Login',
        icon: 'fa fa-sign-in-alt',
      },
      {
        href: '/charts',
        title: 'List',
        icon: 'fa fa-cog',
        child: [
          {
            href: '/charts/sublink',
            title: 'Sub Link',
          },
        ],
      },
    ],
  },
  methods: {
    ...mapActions('aside', ['triggerSidebar']),
  },
};
</script>
