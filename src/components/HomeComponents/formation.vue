<template>
    <section>
        <div class="titre">Présentons</div>
        <div>Nos Activités</div>
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
.titre{
    width: 103px;
    height: 27px;
    font-size: 18px;
    margin-left: 580px;
    font-family: 'Poppins', sans-serif;
    line-height: 27px;
    text-align: Center;
    color: rgba(94, 98, 130, 1);
}
.titre + div{
    width: 321px;
    height: 65px;
    font-size: 50px;
    margin-left: 450px;
    font-family: 'Volkhov', serif;
    line-height: 64.5px;
    text-align: Center;
    color:rgba(20, 24, 62, 1); 
}
.btn{
    background-color: dodgerblue;
    padding: 10px;
}


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

