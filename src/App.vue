<template>
  <div id="app">
    <div class=" navbar"">
      <img 
        src="https://www.tokohkita.co/uploads/berita/thumbs/750x400/20190804_bank-bri-pastikan-operasional-bank-tak-terganggu-pasca-pemadaman-listrik.jpg"
        alt=""
      />

      <img
        src="https://faseberita.id/property/files/2020/09/bumn-logo.jpg"
        alt=""
      />
    </div>

    <div style="">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: #008ed4;
  width: 100%;
  height: 80px;
  position: absolute;
  z-index: 1;
  box-shadow: 0px 7px 21px 0px rgba(50, 50, 50, 0.1);
}

.navbar img {
  height: 60px;
  border-radius: 10px;
}

body{
  margin: 0;
  padding: 0;

}
</style>
