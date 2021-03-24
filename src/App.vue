<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-nav>
          <b-nav-item href="#" disabled>
            <img
              src="https://www.tokohkita.co/uploads/berita/thumbs/750x400/20190804_bank-bri-pastikan-operasional-bank-tak-terganggu-pasca-pemadaman-listrik.jpg"
              alt=""
          /></b-nav-item>
          <b-nav-item href="#" disabled
            ><img
              src="https://faseberita.id/property/files/2020/09/bumn-logo.jpg"
              alt=""
          /></b-nav-item>
        </b-navbar-nav>
      </b-navbar>
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
  height: 100px;
  position: absolute;
  z-index: 1;
  box-shadow: 0px 7px 21px 0px rgba(50, 50, 50, 0.1);
}

.navbar img {
  height: 80px;
  border-radius: 10px;
}
</style>
