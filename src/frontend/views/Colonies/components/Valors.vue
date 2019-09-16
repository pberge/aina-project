<template>
    <div class="valors">
        <div class="row valors-row">
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="flag" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.country")}}
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="tree" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.nature")}}
                    </div>
                </div>
            </div>
            <div class="cell">
               <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="mountain" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.sport")}}
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="globe" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.culture")}}
                    </div>
                </div>
            </div>
            <div class="cell">
               <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="lightbulb" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.creativity")}}
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="user-friends" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.group")}}
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="handshake" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.solidarity")}}
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="heart" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.convivence")}}
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="hand-holding-heart" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.humanValues")}}
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="cross" />
                    </div>
                    <div class="cell-content-back">
                        {{$t("colonies.faith")}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { library } from '@fortawesome/fontawesome-svg-core'
import {    faMountain,
            faTree,
            faFlag,
            faGlobe,
            faUserFriends,
            faUsers,
            faHeart,
            faLightbulb,
            faHandshake,
            faCross,
            faHandHoldingHeart
        } from '@fortawesome/free-solid-svg-icons'

@Component
export default class Valors extends Vue {
    created () {
        library.add(faMountain, faTree, faFlag, faGlobe, faUserFriends, faUsers, faHeart, faLightbulb, faHandshake, faCross, faHandHoldingHeart)
    }
}
</script>

<style scoped>
.valors {
    margin: 0 10%;
}

.valors-row {
    justify-content: center;
}

.cell {
    text-align: center;
    width: 10em;
    height: 10em;
    position: relative;
    margin: 0.2em;

    perspective: 1000px;
    background-color: transparent;
}

.cell-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
}

.cell:hover .cell-content-front {
    opacity: 0;
    transition: .3s ease;
}

.cell:hover .cell-content-back {
    opacity: 1;
    transition: .5s ease;
}

.cell-content {
    display: flex;
    flex: 1 0;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
}

.cell-content-front, .cell-content-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    flex: 1 0;
    justify-content: center;
    align-items: center;
    padding: 1em;
}

.cell-content-front {
    background-color: transparent;
    color: black;
    opacity: 1;
    transition: .5s ease;
}

.cell-content-back {
    background-color: transparent;
    color: black;
    opacity: 0;
    transition: .5s ease;
    line-height : 25px;
    font-size: 0.9em;
}

.svg-inline--fa {
    height: 1.5em;
    width: 1.5em;
}

</style>