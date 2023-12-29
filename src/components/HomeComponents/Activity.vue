<template>
 
  <section class="mt-10">
    <v-row>
      <v-col>
        <div class="titre">Les Formations en 2023</div>
        <p class="text-center">Nos Formateurs</p>
      </v-col>
    </v-row>
    <v-row class="mb-16">
        <v-col class=" d-flex">
            <div class=""> 
                <img src="../../assets/images/right-arrow_3839915 4.png"  class="image fleche-gauche " style="margin-top: 180px;" alt="">
            </div>
            <div>
                <div> 
                    <img src="../../assets/images/Rectangle 14.png" style="" class="image element1 " alt="">
                </div>
                <div class="phrase bloc pt-5 pa-3">
                    <div class="d-flex mb-4 " style=" gap: 30%;">
                        <div>KOTANMI Florian</div>
                        <div>RII 1</div>
                    </div>
                    <div>Electronique</div>
                </div>
            </div>
            
            <div>
                <div> 
                    <img src="../../assets/images/Rectangle 14.png" class="image element2" alt="">
                </div>
                <div class="phrase bloc pt-5 pa-3 item2">
                    <div class="d-flex mb-4 " style=" gap: 30%;">
                        <div>KOTANMI Florian</div>
                        <div>RII 1</div>
                    </div>
                    <div>Electronique</div>
                </div>
            </div>
            
            <div>
                <div style="z-index: 2;" > 
                    <img src="../../assets/images/Rectangle 14.png" class="image element3 " alt="">
                </div>
                <div class="phrase bloc pt-5 pa-3 item3">
                    <div class="d-flex mb-4 " style=" gap: 30%;">
                        <div>KOTANMI Florian</div>
                        <div>RII 1</div>
                    </div>
                    <div>Electronique</div>
                </div>
            </div>

            <div class="" style="z-index: -1;">
                <img src="../../assets/images/Decore.png"  class="decoration" alt="">
            </div>
            <div> 
                <img src="../../assets/images/right-arrow_3839915 3.png" class="image fleche-droit" style="margin-top: 180px;" alt="">
            </div>
           </v-col>
    </v-row>
    <v-row class=" d-flex justify-center">
          <v-col-4 class=" text-center d-flex justify-center align-center enveloppe">
            <v-btn variant="" class="btn ">Voir les formations </v-btn>
          </v-col-4>
    </v-row>

        <!-- <v-container class="d-flex">
            <v-row no-gutters class="d-flex justify-space-between">
              
                <v-col
                    v-for="n in 3"
                    :key="n"
                    cols="8"
                    sm="3"
                >
                    <v-card
                        class="back"
                        width="314"
                        height="457" 
                    >
                        <v-img
                            height="327"
                            width=auto
                            :src= "images[0]" 
                            style=" object-fit: contain;"
                        ></v-img> -->
                        <!-- <v-card-item>
                            <v-card-title class="font-weight-bold">{{ titles[n-1] }}</v-card-title>
                        </v-card-item>
                        <v-row>
                            <v-card-text class="text-center">
                              {{ ateliers[n-1] }}
                            </v-card-text>
                            <v-card-text class="text-center">
                              {{ level[n-1] }}
                            </v-card-text>
                        </v-row> 
                    </v-card>
                    
                </v-col>

               
                
            </v-row>
            <DecorIcon class="icon"/>
            
        </v-container>
        <v-row class="d-flex justify-center">
            <v-btn variant="tonal" class="btn"> Voir les formations </v-btn>
        </v-row> -->
   
    
    
  </section>
</template>

<style scoped>

.titre{
  width: 250px;
  height: 27px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: rgba(94, 98, 130, 1);
  margin-left: 530px;
  margin-bottom: 8px;
}

.titre + p{
  width: 393px;
  height: 65px;
  font-family: 'Volkhov', serif;
  font-weight: 700;
  font-size: 50px;
  line-height: 64.5px;
  color: rgba(20, 24, 62, 1);
  margin-left: 440px;
  margin-bottom: 8px;
}

.bloc{
  position: relative;
  background-image: url("../../assets/images/Rectangle 15.png");
  
  height: 130px;
  border-radius: 0px, 0px, 24px, 24px; 
  margin-left: 70px;
  color: rgba(94, 98, 130, 1);
    font-weight: 500;
    font-size: 18px;
    line-height: 22.41px;
}

image{
  width: 315px;
  height: 457px;
  position: relative;
 
}

.fleche-gauche{
    margin-left: 16px;  
}

.Marginbottom{
    margin-bottom: -318px; 
}
.element1{
    margin-left: -9px;
    margin-bottom: -317px; 
}

.element2{
    /* background-color: black; */
    margin-left: -120px;
    margin-bottom: -316px; 

}

.element3{
    /* background-color: black; */
    margin-left: -119px;
    margin-bottom: -317px; 
}

.fleche-droit{
    margin-left: -50px; 
}

.item2{
    margin-left: -40px; 
}

.item3{
    margin-left: -40px; 
}


.icon{
position: absolute;
bottom: 100px;
left: 88%;
z-index: -1;
}
.btn{
    background-color: #275B73;
    padding: 10px;
}

.enveloppe{
    background-color:rgba(39, 91, 115, 1);
    font-family: 'Actor', sans-serif;
    width: 200px;
    height: 60px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.65px;
    border-radius: 10px;
    box-shadow: 0px 20px 35px 0px rgba(241, 165, 1, 0.15);
    color: rgba(255, 255, 255, 1);
    

}

.decoration{
    margin-top: 170px;
    margin-left: -150px;
    
}




</style>



<script setup>
// import DecorIcon from '../icons/IconDecor.vue';
</script>

<script>
import girl_pull_rouge from "../../assets/images/Rectangle 14.png";

export default {
name: 'MyActivity', 

// export default {
    data() {
        return {
            images: [
              girl_pull_rouge
            ],
            titles: [
                'Florian KOTANMI',
                'Prince AVOHOU',
                'Sephora ALAYE'
            ],
            ateliers: [
                "Electronique",
                "Electronique",
                "Electronique"
            ],
            level: [
                "RII 1",
                "RII 1",
                "RT 1"
            ]
        }
    }    
// };
};
</script>



