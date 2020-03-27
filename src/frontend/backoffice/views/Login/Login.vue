<template>
    <div class="login">
        <img class="logo" src="@/frontend/assets/logoaina.png"/>
        <h1>AINA Casa de colònies</h1>
        <input type="text" name="username" v-model="username" placeholder="Username" /><br/>
        <input type="password" name="password" v-model="password" placeholder="Password" /><br/>
        <div class="btn-container">
            <a class="btn btn-select" v-on:click="login()">Inicia sessió</a> 
        </div>  
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'

@Component({
  components: {
  }
})
export default class Login extends Vue {
    username: string = ""
    password: string = ""

    login() {
        firebase.auth().signInWithEmailAndPassword(this.username, this.password)
        .then(() => {
            this.$router.replace('/admin/news')
        })
        .catch(function(error) {
            console.log(firebase.auth().currentUser)
        })
    }
}
</script>

<style scoped>
.login {
    text-align: center;
}

.logo {
    width: 7em;
}

input {
    padding: 1em;
    border: 1px solid black;
    border-radius: 3px;
    width: 20em;
    margin-bottom: 1em;
}

.btn-container {
    margin-top: 1em;
}

</style>
