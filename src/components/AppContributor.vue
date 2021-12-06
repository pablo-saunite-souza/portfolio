<template>
    <div class="contributors" id="about">
        <div class="contributor">
            <img src="../assets/pablo-foto.png" alt="Pablo Saunite de Souza" >
            <h3>Pablo Saunite de Souza</h3>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
            <span>Descrições do contribuidor</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppContributor'
}
</script>

<style scoped>
.contributors {
    background-color: #fff;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.contributor {
    display: flex;
    flex-direction: column;
    height: 340px;
    width: 320px;
    box-shadow: 0px 0px 15px #c9c9c9;
    padding: 10px;
    align-items: center;
}

.contributor img {
    width: 100px;
    border-radius: 50%;
    box-shadow: 0 0 10px #c9c9c9;
}
</style>