<template>
  <div id="app-front">
    <div class="page-container">
        <HeaderElnic/>
    </div>
    <SidebarElnic/>
    <routerFront-view/>
  </div>
</template>

<script>
import SidebarElnic from '@/components/elnic/Sidebar.vue'
import HeaderElnic from '@/components/elnic/Header.vue'


export default {
  name: 'app-front',
  components: {
    SidebarElnic,HeaderElnic
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
