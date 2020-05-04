<template>
    <div class="selector">
        <div class="dropbtn">
            <img class="icon" :src="getImgUrl()"/>
        </div>
        <div class="list">
            <a @click="setLocale('cat')">Català</a>
            <a @click="setLocale('esp')">Castellano</a>
            <a @click="setLocale('fr')">Français</a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MobileLanguageSelector extends Vue {
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
        else if (this.$i18n.locale == 'fr') this.flag = 'flagFrance'
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
    margin-top: 1em;
}

.list {
    width: 100%;
    font-size: 16px;
    border: none;
    cursor: pointer;
    display: block;
}

a {
    display: block;
    padding-top: 1em;
}

</style>

