<template>
  <div>
    <h1 align="center">Main Page</h1>

    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template slot="header">
        BootstrapVue
      </template>

      <template slot="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </template>

      <hr class="my-4"/>

      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    title: String,
    icon: String,
    titleClasses: [String, Object, Array]
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit("change", this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit("change", false);
    }
  }
};
</script>
