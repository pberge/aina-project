<template>
    <div class="selector">
        <div class="dropbtn">
            <img class="icon" :src="getImgUrl()"/>
            <i class="material-icons">keyboard_arrow_down</i>
        </div>
        <div class="dropdown">
            <div class="dropdown-content">
                <a @click="setLocale('cat')">Català</a>
                <a @click="setLocale('esp')">Castellano</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LanguageSelector extends Vue {
    flag: any = ''

    created () {
        this.setFlag()
    }

    getImgUrl() {
        var images = require.context('../../assets/', false, /\.png$/)
        return images('./' + this.flag + ".png")
    }

    setLocale(lang: string) {
        this.$i18n.locale = lang
        this.setFlag()
    }

    setFlag() {
        if (this.$i18n.locale == 'cat') this.flag = 'flagAnd'
        else if (this.$i18n.locale == 'esp') this.flag = 'flagSpain'
    }

}
</script>

<style scoped>
.selector {
    position: relative;
    display: inline-block;
}

.icon {
    width: 1em;
}

.dropbtn {
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  padding-top: 0.3em;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  font-size: 14px;
  right: 0;
  cursor: pointer;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.selector:hover .dropdown-content {
  display: block;
}

.dropdown-content:hover {
    display: block;
}
</style>

