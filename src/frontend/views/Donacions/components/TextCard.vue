<template>
    <div class="text-card">
                <div class="message" :class="{'sent': isSender, 'received': !isSender}">
                    <div class="autor">{{text.autor}}</div>
                    <span class="text" style="display:block;">{{text.text}}</span>
                </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ObjectText from '../../../shared/models/objecteText'

@Component
export default class TextCard extends Vue {
    @Prop() text!: ObjectText
    image: string = ''
    isSender: boolean = true

    created () {
        this.isSender = Math.random() >= 0.5;
    }

    mounted () {
        console.log(this.text)
    }
}
</script>

<style scoped>
.text-card {
    display: flex;
    flex-direction: column;
    max-width: 27em;
    font-size: 1em;
    transition: 0.3s;
    border-radius: 5px 0px 5px 5px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}

.autor {
    font-weight: bold;
    height: 20px;
}

.message {
    color: #000;
    clear: both;
    line-height: 18px;
    font-size: 15px;
    padding: 8px;
    position: relative;
    margin: 8px 0;
    max-width: 85%;
    word-wrap: break-word;
    z-index: -1;
}

.message:first-child {
    margin: 16px 0 8px;
}

.message.sent {
    background: #00bcd433;
    border-radius: 5px 0px 5px 5px;
    margin-left: auto;
}

.sent:after {
    border-width: 0px 0 10px 10px;
    border-color: transparent transparent transparent #00bcd433;
    top: 0;
    right: -10px;
}

.message:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
}

.message.received {
    background: #f5881847;
    border-radius: 0px 5px 5px 5px;
    margin-right: auto;
}

.received:after {
    border-width: 0px 10px 10px 0;
    border-color: transparent #f5881847 transparent transparent;
    top: 0;
    left: -10px;
}

@media (max-width: 676px) { /*MOBILE*/
  .text-card {
    margin: 0;
    max-width: 100%;
    margin-bottom: 1em;
  }

}

</style>
