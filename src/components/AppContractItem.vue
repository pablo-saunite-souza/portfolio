<template>
    <div class="contract-description">
      <h3>{{contract.title}}</h3>
      <h5 v-for="description in contract.descriptions" :key="description">- {{description}}</h5>
      <br><br>
      <h1 class="contract-price">
        {{contract.price.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}}
      </h1>
      <button class="btn">Assine agora</button>
    </div>
</template>

<script>
  export default {
    name: 'AppContractItem',
    props: {
      contract: Object
    }
  }
</script>
<style scoped>
.contract-description {
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 350px;
  margin: 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #c9c9c9;
  text-align: left;
  padding: 20px;
  justify-content: space-around;
}
.contract-description:hover {
  box-shadow: 0px 0px 15px #696969;
}

.contract-price {
  text-align: center;
}
</style>