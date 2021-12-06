<template>
  <div id="nav-menu">
    <img alt="Gabriela-Cantarelli" :src="appLogoImg" height="100">
    <nav id="nav" class="nav-links">
      <a :href="`#${link.id}`" v-for="(link, index) in appNavLinks" :key="index"><span>{{link.text}}</span> {{index != appNavLinks.length -1 ? '|&nbsp;' : ''}}</a>
    </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "AppTopNavigator",
  computed: {
    ...mapState(['appLogoImg', 'appNavLinks'])
  }
}
</script>
<style scoped>
#nav-menu {
  padding: 10px 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  z-index: 3;
}

#nav-menu img {
  align-self: flex-start;
  z-index: 3;
  position: absolute;
  top: 5;
}

#nav {
  position: absolute;
  z-index: 3;
  top: 50px;
  right: 60px;
}

@media screen and (max-width: 1120px) {
  #nav {
    font-size: 14pt;
  }
}
@media screen and (max-width: 925px) {
  #nav {
    top: 50px;
    right: 20px;
  }
  #nav-menu img {
    left: 20px;
  }
}
</style>