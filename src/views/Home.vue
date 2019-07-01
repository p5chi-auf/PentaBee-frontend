<template>
  <div class="col home-content">
    <b-alert show class="text-center" variant="success" dismissible fade>
      <b>Well done!</b> You successfully logged in to this website.
      <br >Welcome <b>Evan You</b>
    </b-alert>
    <b-card-group deck>
      <b-card
        title="ScarletMine"
        :img-src="require('../assets/images/scarlet.png')"
        img-alt="Image"
        img-top
        bg-variant="light"
        border-variant="warning"
      >
        <b-card-text>
          Trello/JIRA look alike website for project-management
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
          Website for interconnection of all software developers, who need help or who can help with activities.
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
          Website for tracking in 2D all the equipment on each floor.
        </b-card-text>
        <div slot="footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        <b-textarea> Need help</b-textarea>
      </b-card>
    </b-card-group>
  </div>
</template>
