<template>
    <div class="plan-control" id="form-submition">
        <h1>{{appFormTitle}}</h1>
        <div class="form-area">
        <form @submit.prevent="appFormAction" class="form-control">
            <div class="form-item">
                <label for="fullName">Nome completo</label>
                <input type="text" name="fullName" id="fullName" placeholder="Infome o seu nome" v-model="fullName">
            </div>
            <div class="form-item">
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" placeholder="Infome o seu e-mail" v-model="email">
            </div>
            <div class="form-item">
                <label for="phoneNumber">Número de telefone</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Infome o seu telefone" v-model="phoneNumber">
            </div>
            <div class="form-item">
                <label for="description">Observação</label>
                <textarea name="description" id="description" cols="30" rows="5" v-model="description"></textarea>
            </div>
            <div class="form-item">
                <button type="submit" class="btn btn-primary-outline">Enviar mensagem</button>
            </div>
            </form>
            <div class="form-description">
                {{appFormDescription}}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'AppForm',
    data() {
        return {
            fullName: "",
            email: "",
            phoneNumber: "",
            description: ""
        };
    },
    computed: {
        ...mapState(['appFormTitle', 'appFormDescription'])
    },
    methods: {
        appFormAction() {
            try {
                if (!this.fullName) {
                    throw new Error('Favor informar o seu nome!')
                }
                if (!this.email) {
                    throw new Error('Favor informar o seu e-mail!')
                }
                if (!this.phoneNumber) {
                    throw new Error('Favor informar o seu telefone!')
                }
                this.$store.dispatch('sendFormSubmition', {
                    fullname: this.fullName,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    description: this.description
                });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
.form-area {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 20px 0px;
}

.form-description {
    max-width: 45%;
    text-align: justify;
    font-size: 14pt;
}

.form-control {
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 45%;
    justify-content: space-between;
    align-items: stretch;
    box-shadow: 1px 3px 8px #292929;
    background-color: var(--primary-color);
    border-radius: 15px;
}

.form-item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2px 5px;
    margin: 5px 0px;
}
.form-item label {
    min-width: 150px;
    text-align: left;
    font-size: 14pt;
    width: 95%;
    margin: 0px 5px 5px 5px;
    color: #fff;
}
.form-item input,
.form-item textarea {
    text-align: left;
    padding: 5px 10px;
    font-size: 12pt;
    width: 95%;
    margin: 0px auto;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 15px;
    box-shadow: 2px 0px 2px 1px #fff;
}
.form-item input:active,
.form-item textarea:active,
.form-item input:focus,
.form-item textarea:focus,
.form-item input:hover,
.form-item textarea:hover {
    outline: none;
}
.form-item button {
    margin: 0px auto;
    width: 100%;
}

#form-submition {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #ddd;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--third-color);
}

#form-submition > h1 {
    width: 100%;
    margin: 10px;
}
</style>