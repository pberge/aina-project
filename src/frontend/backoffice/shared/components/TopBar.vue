<template>
  <div class="topbar row">
    <div class="user">
      {{userName}}
    </div>
    <i class="material-icons" @click="isModalActive = true">exit_to_app</i>
    <Modal 
      v-if="isModalActive"
      :title="modalTitle"
      :text="modalText"
      @action="modalAction"  
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import firebase from 'firebase'
import Modal from './Modal.vue'

@Component({
  components: {
    Modal
  }
})
export default class TopBar extends Vue {
  modalTitle: string = "Tancar sessió"
  modalText: string = "Està segur que vol tancar la sessió?"

  isModalActive: boolean = false

  get userName() {
    return firebase.auth().currentUser.email
  }

  modalAction(value: string) {
    if(value === 'ok') {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/admin')
      })
    }
    else {
      this.isModalActive = false
    }
  }
}
</script>

<style scoped>
.topbar {
    z-index: 1;
    position:fixed;
    height: 4em;
	  margin: 0;
    left: 14em;
    right: 0;
    background-color: white;
    border-bottom: 1px solid #3a3a3afa;
    align-items: center;
    justify-content: flex-end;
    padding: 1em;
}

.user {
    font-size: 0.8em;
    margin-right: 1em;
}

i {
  cursor: pointer;
}

</style>
