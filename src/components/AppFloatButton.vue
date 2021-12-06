<template>
    <a id="float-whats" :href="floatButtonLink" target="_blank">
        <img :src="floatButtonIcon" id="float-whats-icon">
    </a>   
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'AppFloatButton',
    computed: {
        ...mapState(['floatButtonLink', 'floatButtonIcon'])
    }
}
</script>
<style scoped>
#float-whats {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    background-color: green;
    padding: 20px;
    border-radius: 50%;
    border-width: 0px;
    cursor: pointer;
    box-shadow: 2px 2px 6px 3px #292929;
    transition: 420ms;
    user-select: none;
    z-index: 5;
}
#float-whats-icon {
    width: 50px;
    height: 50px;
    cursor: pointer;
    user-select: none;
}
#float-whats:hover {
    box-shadow: 2px 2px 6px 3px #fff;
    transform: translateY(-2px);
}
#float-whats:active {
    transform: translateY(4px);
}
</style>