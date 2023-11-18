<template>
    <section>
        <h3 class="text-center font-weight-bold">Présentons</h3>
        <h1 class="text-center font-weight-bold">Nos Activités</h1>
        <v-container>
            <v-row no-gutters class="d-flex justify-space-between">
                <v-col
                    v-for="n in 4"
                    :key="n"
                    cols="12"
                    sm="3"
                >
                    <v-card
                        class=" my-12 rounded-xl elevation-5 v-img"
                        max-width="250"
                    >
                        <v-img
                            class="image"
                            height="180"
                            width="180"
                            :src= "images[n-1]" 
                        ></v-img>
                        <div class="rounded-shaped decor"> </div>
                        <v-card-item>
                            <v-card-title class="text-center font-weight-bold">{{ titles[n-1] }}</v-card-title>
                            </v-card-item>
                            <v-card-text class="text-center">
                               {{ descriptions[n-1] }}
                            </v-card-text>
                            <!-- <div
                                v-show="hoveredCard === index"
                                class="hovered-div rounded-shaped"
                                >
                                Contenu de la div survolée
                            </div> -->
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
                <v-btn variant="tonal" class="btn"> Voir Plus... </v-btn>
            </v-row>
        </v-container>
    </section>
</template>

<style scoped>
.btn{
    background-color: dodgerblue;
    padding: 10px;
}

/* .hovered-div{
    /* opacity: 0; 
    background-color: green ;
    width: 150px;
    height: 100px;
    position: relative;
    z-index: -10;
    /* top: 100px; 
} */
.v-img:hover{
    cursor: pointer;
    transform: scale(1.08);
    transition: .5s;
}
.v-img{
    position: relative;
    z-index: 10;
}
 
.image{
    position: relative;
    left: 6%;
    top: 20px;
}
    h3{
        font-size: 2em;
    }
    h1{
        font-size: 3.5em;
    }
    .decor{
        position: relative;
        left: 30%;
        bottom: 70px;
        width: 60px;
        height: 50px;
        z-index: -1;
        opacity: 0.6;
        background-color: peachpuff;
    }
</style>

<script>
    import antenne from "../../assets/images/antenne.png";
    import avion from "../../assets/images/avion.png";
    import micro from "../../assets/images/micro.png";
    import parametre from "../../assets/images/parametre.png";
    export default {
        data() {
            return {
                images: [
                    antenne, avion, micro, parametre
                ],
                titles: [
                    'Concours et Webinaire',
                    'Formations',
                    'Relations',
                    'Journées Culturelles'
                ],
                descriptions: [
                    "Nous organisons, participons à des concours, webinaires numériques.",
                    " Nous proposons des formations riches en découvetes,en pratiques",
                    "Nous tissons des liens entres étudiants GIT,d'autres secteurs de l'EPAC,des autres écoles",
                    "Des tournois de football,aux journées de rejouissance et ludique"
                ]
            }
        },

            elevateCard() {
                this.$refs.card.$el.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
            },
            resetElevation() {
                this.$refs.card.$el.style.boxShadow = "0 2px 4px 0 rgba(0,0,0,0.2)";
            }
        
};
    
</script>

