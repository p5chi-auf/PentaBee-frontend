<template>
  <footer type="dark">
    <div class="footer">
      <div class="bottom-bar">
        <div class="inner">
          <div class="bottom-bar-yellow"/>
        </div>
      </div>
      <p>
        Copyright {{ new Date().getFullYear() }} &copy; PentaBee. All Rights
        Reserved. Privacy Policy
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: #161616;
}

.bottom-bar {
  width: 100%;
  height: 2px;
}

.inner .bottom-bar-yellow {
  width: 100%;
  height: inherit;
}

.bottom-bar-yellow {
  background: #ffda00;
}
</style>
