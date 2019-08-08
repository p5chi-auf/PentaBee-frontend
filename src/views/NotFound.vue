<template>
  <div class="login-registration-background">
    <b-container fluid>
      <b-row align-h="center" class="mt-5">
        <b-img :src="require('../assets/images/error_bee.png')"/>
        <div class="a">Oops!</div>
      </b-row>

      <div class="text-center">
        <h1>404 - PAGE NOT FOUND</h1>

        <p>The page you are looking for might have been removed
          had it's name changed or is temporary unavailable.
        </p>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  img{
    height: 40px;
  }
  div.a {
    color: #ffda00;
    -webkit-background-clip: text;
    font-size: 100px;
  }
  h1, p{
    color: white;
  }
</style>
