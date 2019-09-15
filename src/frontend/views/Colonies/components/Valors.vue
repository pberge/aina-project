<template>
    <div class="valors">
        <div class="row valors-row">
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="flag" />
                    </div>
                    <div class="cell-content-back">
                        Fer conèixer i estimar el país
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="tree" />
                    </div>
                    <div class="cell-content-back">
                        Sensibilitzar al respecte de la natura i del medi ambient
                    </div>
                </div>
            </div>
            <div class="cell">
               <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="mountain" />
                    </div>
                    <div class="cell-content-back">
                        Iniciar en l'esport, en especial el muntanyisme i l'esquí de fons
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="globe" />
                    </div>
                    <div class="cell-content-back">
                        Promoure l'ús del català i el coneixement del nostre patrimoni cultura
                    </div>
                </div>
            </div>
            <div class="cell">
               <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="lightbulb" />
                    </div>
                    <div class="cell-content-back">
                        Fomentar la creativitat i desinhibició dels infants amb treballs manuals i activitats d'expressió oral i corporal
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="user-friends" />
                    </div>
                    <div class="cell-content-back">
                        Ensenyar les virtuts i mecanismes del treball de grup
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="handshake" />
                    </div>
                    <div class="cell-content-back">
                        Potenciar els sentiments de solidaritat i justícia
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="heart" />
                    </div>
                    <div class="cell-content-back">
                        Cultivar la convivència entre persones, cultures i races, i lluitar contra tot tipus de discriminació
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="hand-holding-heart" />
                    </div>
                    <div class="cell-content-back">
                        Educar en valors humans i crear les bases d'un pensament lliure, crític i ètic
                    </div>
                </div>
            </div>
            <div class="cell">
                <div class="cell-inner">
                    <div class="cell-content-front">
                        <font-awesome-icon icon="cross" />
                    </div>
                    <div class="cell-content-back">
                        Ajudar la fe de cada infant i cada jove
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
    /* border: 1px solid grey;
    border-radius: 3px; */
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
    
    /* transform-style: preserve-3d; */
}

/* .cell:hover .cell-inner {
    transform: rotateY(180deg);
    transition: transform 0.8s;
    transform-style: preserve-3d;
} */

.cell:hover .cell-content-front {
    opacity: 0;
    transition: .3s ease;
    /* color: #AEB63A; */
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
    /* border: 1px solid #AEB63A; */
    line-height : 25px;
    font-size: 0.9em;
    /* transition: .5s ease; */
}

.svg-inline--fa {
    height: 1.5em;
    width: 1.5em;
}

</style>