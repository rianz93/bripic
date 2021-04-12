<template>
  <div id="app">
    <div class="navbar2">
      <img 
        src="https://www.tokohkita.co/uploads/berita/thumbs/750x400/20190804_bank-bri-pastikan-operasional-bank-tak-terganggu-pasca-pemadaman-listrik.jpg"
        alt=""
      />

      <img
        src="https://faseberita.id/property/files/2020/09/bumn-logo.jpg"
        alt=""
      />
      <h6 v-if="kodeUker!=''">
        {{  "KODE UKER : " +kodeUker}}
      </h6>
    </div>

    <div style="">
      <router-view></router-view>
    </div>
  </div>
</template> 

<script>
  export default{
    data(){
      return{
        kodeUker:'',
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar2 h6{
  color: white;
  font-weight: 600;
  margin: auto 20px auto auto;
}
.navbar2 {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  background-color: #008ed4;
  width: 100%;
  height: 80px;
  z-index: 1;
  box-shadow: 0px 7px 21px 0px rgba(50, 50, 50, 0.1);
  padding-left: 10px
}

.navbar2 img {
  height: 60px;
  border-radius: 10px;
  margin-right: 10px
}

body{
  margin: 0;
  padding: 0;

}
</style>
