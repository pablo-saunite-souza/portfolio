<template>
  <div class="home">
    <AppWelcome />

    <AppCarousel />

    <AppAbout />
    
    <AppForm />

    <AppFooter />
    
    <AppFloatButton />
  </div>
</template>

<script>
import AppWelcome from '../components/AppWelcome.vue'
import AppFooter from '../components/AppFooter.vue'
import AppCarousel from '../components/AppCarousel.vue'
import AppAbout from '../components/AppAbout.vue'
import AppForm from '../components/AppForm.vue'
import AppFloatButton from '../components/AppFloatButton.vue'
export default {
  name: 'Home',
  components: {
    AppWelcome,
    AppFooter,
    AppCarousel,
    AppAbout,
    AppForm,
    AppFloatButton
  }
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
}
</style>