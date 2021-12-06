<template>
    <div class="description">
        <div class="description-icon">
          <img v-if="item.icon"  :src="item.icon" :alt="item.title">
        </div>
        <div class="informations">
            <h3>{{item.title}}</h3>
            <span>{{item.description}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppCarouselItem',
  props: {
    item: Object
  }
}
</script>
<style scoped>
.description {
  flex:none;
  display: flex;
  flex-direction: row;
  min-width: 650px;
  width: auto;
  max-width: 750px;
  height: 70%;
  margin: auto 20px;
  background-color: var(--third-color);
  scroll-snap-align: center;
  pointer-events: none;
  border-radius: 20px;
  box-shadow: 3px 3px 8px #292929;
}

.description-icon {
  width: 30%;
  display: flex;
  user-select: none;
  /* filter: invert(50%) sepia(90%) saturate(1000%) brightness(60%) hue-rotate(1350deg) contrast(119%); */
  /* sepia(93%) saturate(1352%) hue-rotate(87deg) brightness(119%) contrast(119%) */
}
.description-icon img {
  height: 150px;
  color: #fff;
  margin: auto;
}
.informations {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  text-align: justify;
}
.informations h3 {
  color: var(--primary-color);
  font-size: 18pt;
}
</style>