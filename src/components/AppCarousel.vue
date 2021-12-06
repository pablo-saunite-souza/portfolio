<template>
    <div class="carousel-control">
        <h3 class="carousel-title">{{servicesTitle}}</h3>
        <div class="carousel-scroll" id="services">
            <AppCarouselItem v-for="(service, index) in services" :key="index" :item="service"  />
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import AppCarouselItem from '../components/AppCarouselItem.vue'
export default {
    name: 'AppCarousel',
    computed: {
        ...mapState(['servicesTitle', 'services'])
    },
    components: {
        AppCarouselItem,
    },
    methods: {
        generateListenerCarousel() {
            document.querySelector('.carousel-scroll').addEventListener('wheel', (e) => {
                if (e.deltaY > 0){
                    if ((e.target.offsetWidth + e.target.scrollLeft) != e.target.scrollWidth) {
                    e.preventDefault();
                    e.target.scrollBy((e.deltaY * 10), 0);
                    }
                } else {
                    if (e.target.scrollLeft != 0) {
                        e.preventDefault();
                        e.target.scrollBy((e.deltaY * 10), 0);
                    }
                }
            });
        }
    },
    mounted() {
        this.generateListenerCarousel();
    }
}
</script>

<style scoped>
.carousel-control {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100vw;
    padding: 20px 0px;
    overflow-x: hidden;
    position: relative;
    background-color: var(--second-color);
} 
.carousel-scroll {
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 100vw;
    height: 350px;
    overflow-x: hidden;
    position: relative;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scrollbar-color: none;
}

.carousel-title {
    position: absolute;
    top: 20px;
    font-size: 18pt;
    justify-content: center;
    margin: 0px auto;
    align-self: center;
    color: #fff;
}
</style>