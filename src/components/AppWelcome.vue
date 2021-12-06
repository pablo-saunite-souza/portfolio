<template>
  <div class="hello">
    <div class="degrade"></div>
    <h1 class="title-h1">{{ appTitle }}</h1>
    <h3 class="title-h3">{{ appSubTitleBottom }}</h3>
    <button class="btn btn-primary">{{appHelloButton}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapState(['appTitle', 'appSubTitleBottom', 'appHelloButton'])
  }
}
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  width: auto;
  height: 600px;
  padding-left: 10%;
  justify-content: center;
  align-items: flex-start;
  background-image: var(--hello-image);
  background-repeat: no-repeat;
  background-size: 100vw;
  background-position: center;
  box-shadow: 0px 2px 6px 2px #292929;
  z-index: 2;
}

.title-h1 {
  text-align: left;
  font-size: 26pt;
  margin: 5px 0px;
  color: #fff;
  text-shadow: 1px 1px 1px #292929;
  z-index: 2;
  padding-right: 40px;
}
.title-h3 {
  color: #fff;
  text-shadow: 1px 1px 1px #292929;
  z-index: 2;
  font-size: 14pt;
}
.btn {
  z-index: 2;
}
</style>
