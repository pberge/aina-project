<template>
  <div class="modal">
    <div class="title">{{title}}</div>
    <div class="text">{{text}}</div>
    <div class="buttons-container row end-xs">
      <a class="btn btn-cancel" @click="cancel">Cancel·lar</a>
      <a class="btn btn-ok" @click="accept">Acceptar</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop() title!: string
  @Prop() text!: string

  cancel () {
    this.$emit('action', 'cancel')
  }

  accept () {
    this.$emit('action', 'ok')
  }
}
</script>

<style scoped>

.modal {
  padding: 0.5em;
  width: 30%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: white;
  border-radius: 0.3em;
  font-size: 12px;
}

.buttons-container {
  margin: 0;
}

.title {
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  margin: 1em;
}

.text {
  text-align: center;
  margin: 3em;
}
</style>
