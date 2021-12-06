<template>
    <footer id="contact">
        <h2>| {{contactTitle}}</h2>
        <div class="contact-info">
            <a v-for="(contact, index) in contacts" :key="index" :href="contact.link" class="contact-item">
                <img :src="contact.icon"  class="svg-icon">
                <span>{{contact.text}}</span>
            </a>
        </div>
        <nav id="nav-footer" class="nav-links">
            <a :href="`#${link.id}`" v-for="(link, index) in appNavLinks" :key="index"><span>{{link.text}}</span> {{index != appNavLinks.length -1 ? '|&nbsp;' : ''}}</a>
        </nav>
        <div id="copyright">
            {{copyright}}
        </div>
    </footer>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: "AppFooter",
    computed: {
        ...mapState(['contactTitle', 'contacts', 'appNavLinks', 'copyright'])
    }
}
</script>

<style scoped>
#contact {
  height: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  background-color: var(--second-color);
  position: relative;
  box-shadow: 0px 2px 8px 2px #292929;
  z-index: 2;
}

#contact h2 {
  margin: 50px 0px 5px 50px;
  color: #ffffff;
  font-size: 24pt;
}
.contact-info {
  margin-left: 70px;
  color: #ffffff;
  font-size: 14pt;
}
.contact-item {
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  text-decoration-color: transparent;
}
.contact-item span {
  margin: 0px 5px;
}
#nav-footer {
  position: absolute;
  top: 50px;
  right: 60px;
}
#copyright {
  position: absolute;
  display: flex;
  bottom: 0;
  height: 80px;
  flex-grow: 1;
  left: 0;
  right: 0;
  background-color: var(--primary-color);
  z-index: 1;
  color: #fff;
  font-size: 12pt;
  text-align: justify;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1120px) {
  #nav-footer {
    font-size: 14pt;
  }
}
</style>