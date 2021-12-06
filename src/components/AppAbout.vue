<template>
    <div class="demo-description" id="about">
        <div class="demo-title">
            <h2>{{appAboutTitle}}</h2>
            <h3>{{appAboutSubTitle}}</h3>
            <a target="_blank" :href="appAboutButtonLink" class="btn btn-primary btn-icon">
                <img v-if="appAboutIcon" :src="appAboutIcon" class="svg-icon">
                <span>
                    {{appAboutButtonText}}
                </span>
            </a>
        </div>
        <div class="description-demo">
            {{appAboutDescription}}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'AppAbout',
    computed: {
        ...mapState([
            'appAboutTitle',
            'appAboutSubTitle',
            'appAboutButtonLink',
            'appAboutIcon',
            'appAboutButtonText',
            'appAboutDescription'
        ])
    }
}
</script>

<style scoped>
.demo-description {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    padding: 0px 20px;
    overflow-x: auto;
    height: 380px;
    /* background-color: var(--second-color); */
    color: #ffffff;
    margin: 0px auto;
    background-image: var(--about-image);
    background-position: 0 -320px;
    background-repeat: no-repeat;
    background-size: 120vw;
    box-shadow: 0px 2px 6px 2px #292929;
    /* filter: blur(2px); */
}

.demo-title{
    width: 45%;
    height: 310px;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.description-demo {
    width: 45%;
    height: 310px;
    margin-top: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
}
</style>