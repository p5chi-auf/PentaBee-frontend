<template>
  <div>
    <h6 class="text-left" style="color: #2d2d2d;">Social</h6>
    <h6 class="text-left">Setup your social profiles info.</h6><br>
    <b-form class="row">
      <b-input-group
        class="col-md-3"
      >
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fab fa-facebook-f"/></span>
        </b-input-group-prepend>
        <b-form-input size="xs"/>
      </b-input-group>

      <b-input-group
        class="col-md-3"
      >
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fab fa-twitter"/></span>
        </b-input-group-prepend>
        <b-form-input size="xs"/>
      </b-input-group>
      <b-input-group
        class="col-md-3"
      >
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fab fa-github"/></span>
        </b-input-group-prepend>
        <b-form-input size="xs"/>
      </b-input-group>

      <b-input-group
        class="col-md-3"
      >
        <b-input-group-prepend>
          <span class="input-group-text"><i class="fab fa-slack-hash"/></span>
        </b-input-group-prepend>
        <b-form-input size="xs"/>
      </b-input-group>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'VSocialVue',
  };
</script>

<style scoped>

</style>
