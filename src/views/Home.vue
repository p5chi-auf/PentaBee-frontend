<template>
  <b-card-group deck class="stile-b-card">
    <b-card
      title="ScarletMine"
      :img-src="require('../assets/images/scarlet.png')"
      img-alt="Image"
      img-top
      bg-variant="light"
      border-variant="warning"
    >
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </b-card-text>
      <div slot="footer" >
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
      <b-textarea> Need help</b-textarea>
    </b-card>
  
    <b-card
      title="PentaBee"
      :img-src="require('../assets/images/pentabee.png')"
      img-alt="Image"
      img-top
      bg-variant="light"
      border-variant="warning"
    >
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </b-card-text>
      <div slot="footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
      <b-textarea>need help</b-textarea>
    </b-card>

    <b-card
      title="Vesta"
      :img-src="require('../assets/images/vesta.png')"
      img-alt="Image"
      img-top
      bg-variant="light"
      border-variant="warning"
    >
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional
        content.
      </b-card-text>
      <div slot="footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
      <b-textarea> Need help</b-textarea>
    </b-card>
  </b-card-group>
</template>
<style>
.stile-b-card{
padding-left: 10px;
padding-right: 10px;
padding-bottom: 50px;
padding-top: 10px;
}
  .card-background{
    background-color: rgba(175, 175, 185, 0.4);
  }
</style>

