<template>
    <section class="mb-6">
        <v-row>
            <v-col>
                <div class="titre d-flex justify-center mb-2">Présentons</div>
                <div class="d-flex justify-center">Nos Activités</div>
                <!-- <v-container>
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
                </v-container> -->
                <v-row class="">
                    <v-col class="d-flex" style="gap: 1%;">
                        <div class="bloc1 d-flex flex-column  align-center justify-center">
                            <img src="../../assets/images/Group 48.png" alt="antenne" class=" mb-4 d-flex justify-center ">
                            <p class=" mb-2 phrase">Concours et Webinaire</p>
                            <div class="text-center">Nous organisons, participons à des concours, webinaires numériques.</div>
                        </div>
                        <div class="active" style="margin-top: 60px;">
                            <div class="bloc2 d-flex flex-column  align-center justify-center">
                                <div class="images">
                                    <img src="../../assets/images/formation 1.png" alt="antenne" class="mb-12" style="margin: 23px 0 0 0 ; width: 70px;">
                                    <img src="../../assets/images/Group 51.png" alt="" class="  " style=" margin: 40px 0 0 0;height: 49px; " >
                                </div>
                                <p class="  phrase">Formations</p>
                                <div class=" text-center" style="padding: 10px 42px 45px 44px;">Nous proposons des formations riches en découvertes, en pratiques.</div>
                            </div>
                            <img src="../../assets/images/Rectangle 157.png" class="d-flex " alt="">
                        </div>
                    
                        <div class="bloc1 d-flex flex-column  align-center justify-center">
                            <div class="images">
                                <img src="../../assets/images/broadcast-297434_1280 1.png" alt="antenne" class="mb-6" style="margin: 23px 0 0 0 ; width: 70px;">
                                <img src="../../assets/images/Group 51.png" alt="" class="  " style=" margin: 30px 0 0 0;height: 49px; " >
                            </div>
                            <p class=" mb-2 phrase">Connexions</p>
                            <div class="text-center"> Nous tissons des liens entres des étudiants de GIT, des autres secteurs de l’EPAC, des autres écoles </div>
                        </div>
                        <div class="bloc1 d-flex flex-column  align-center justify-center">
                            <div class="images">
                                <img src="../../assets/images/journee-culturelle 1.png" alt="antenne" class="mb-2" style="margin: 23px 0 0 0 ; width: 70px;">
                                <img src="../../assets/images/Group 49.png" alt="" class="  " style=" margin: 30px 0 0 -25px;height: 66px;" >
                            </div>
                            <p class=" mb-2 phrase">Journées culturelles</p>
                            <div class=" text-center">Des tournois de football, aux journées de réjouissance et ludique.</div>
                        </div>
                    </v-col>
                </v-row> 
            </v-col>
            <v-col style="position: relative; left: -20px;">
                <img src="../../assets/images/Group 4.png" alt="">
            </v-col>
        </v-row>
        <v-row class=" d-flex justify-center">
          <v-col-4 class=" text-center d-flex justify-center align-center enveloppe">
            <v-btn variant="" class="btn "> Voir plus.... </v-btn>
          </v-col-4>
        </v-row>
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

.phrase{
    color: rgba(30, 29, 76, 1);
    width: 177px;
    height: 27px;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    line-height: 27.24px;
    text-align: center;
}

img + p{

    color: rgba(30, 29, 76, 1);
    width: 177px;
    height: 27px;
    font-size: 15px;
    font-weight: 700;
    font-family: 'Open Sans', sans-serif;
    line-height: 27.24px;
    text-align: center;
}

img + div{
    color: rgba(94, 98, 130, 1);
    width: 181px;
    height: 78px;
    font-size: 14px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    line-height:26px;
    text-align: Center; 
}

.bloc1{
    width: 181px;
    height: 227px;
    margin-left:80px;
    margin-top: 110px;
    border-radius: 18px, 5px, 10px, 5px;

}

.active{
    width: 302px;
    height: 347px;
    padding: 0;
}

.index{
    z-index: -1;
}


.active > img{
    position: relative;
    top: -68px;
    z-index: -1;
}

.bloc2{
    position: relative;
    width: 267px;
    height: 314px;
    margin-left:33px;
    border-radius: 36px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 20px 13px 0px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02);
    box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.02);
    

}

.images{
    position:relative;
    display: flex;
}

.images > img{
    position: relative;
    
}

.enveloppe{
    background-color:rgba(39, 91, 115, 1);
    font-family: 'Actor', sans-serif;
    width: 170px;
    height: 60px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.65px;
    border-radius: 10px;
    box-shadow: 0px 20px 35px 0px rgba(241, 165, 1, 0.15);

}

.btn{
    padding: 10px;
    font-family: 'Actor', sans-serif;
    width: 82px;
    height: 22px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.65px;
    color: rgba(255, 255, 255, 1);
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
    import antenne from "../../assets/images/Group 48.png";
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

