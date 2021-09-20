<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
@import './assets/plugins/bootstrap/css/bootstrap.min.css';
@import './assets/plugins/font-awesome/css/all.min.css';
@import './assets/css/dark_theme.css';
@import './assets/css/connect.min.css';
@import './assets/css/custom.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script src="../../assets/plugins/jquery/jquery-3.4.1.min.js"></script>
<script src="../../assets/plugins/bootstrap/popper.min.js"></script>
<script src="../../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
<script src="../../assets/plugins/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<script src="../../assets/plugins/jquery-sparkline/jquery.sparkline.min.js"></script>
<script src="../../assets/plugins/apexcharts/dist/apexcharts.min.js"></script>
<script src="../../assets/plugins/blockui/jquery.blockUI.js"></script>
<script src="../../assets/plugins/flot/jquery.flot.min.js"></script>
<script src="../../assets/plugins/flot/jquery.flot.time.min.js"></script>
<script src="../../assets/plugins/flot/jquery.flot.symbol.min.js"></script>
<script src="../../assets/plugins/flot/jquery.flot.resize.min.js"></script>
<script src="../../assets/plugins/flot/jquery.flot.tooltip.min.js"></script>
<script src="../../assets/js/connect.min.js"></script>
<script src="../../assets/js/pages/dashboard.js"></script>