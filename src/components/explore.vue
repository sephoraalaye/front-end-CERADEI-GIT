<template>
    
    <v-container style="margin-top: 10%">
        <v-row >
            <v-col :cols="8">
                <v-row class="mb-16">
                    <v-col>
                        <div class="bloc">
                            <img src="../assets/images/Rectangle14.png" class="" alt="">
                            <div class="card">
                                <img src="../assets/images/Rectangle 15 (1).png" class="" alt="">
                                <div class="container">
                                    <div class="titre ml-2 mb-4 ">Journée du Monde Professionnel (JMP)</div>
                                    <div class="d-flex" style="gap: 30%;">
                                        <div class="d-flex">
                                            <img src="../assets/images/calendrier 1.png" class="mt-4 ml-2" style="width: 20px; height: 20px;" alt="">
                                            <div class="ml-12">Avril 2022</div>
                                        </div>
                                        <div>Voir plus...</div>
                                    </div> 
                                </div>
                            </div> 
                        </div>

                      
                    </v-col>
                    <v-col>
                        <div class="bloc">
                            <img src="../assets/images/Rectangle14.png" class="" alt="">
                            <div class="card">
                                <img src="../assets/images/Rectangle 15 (1).png" class="" alt="">
                                <div class="container">
                                    <div class="titre ml-2 mb-4 ">Journée du Monde Professionnel (JMP)</div>
                                    <div class="d-flex" style="gap: 30%;">
                                        <div class="d-flex">
                                            <img src="../assets/images/calendrier 1.png" class="mt-4 ml-2" style="width: 20px; height: 20px;" alt="">
                                            <div class="ml-12">Avril 2022</div>
                                        </div>
                                        <div>Voir plus...</div>
                                    </div> 
                                </div>
                            </div> 
                        </div>

                      
                    </v-col>
                </v-row>
                <v-row class="mb-16">
                    <v-col>
                        <div class="bloc">
                            <img src="../assets/images/Rectangle14.png" class="" alt="">
                            <div class="card">
                                <img src="../assets/images/Rectangle 15 (1).png" class="" alt="">
                                <div class="container">
                                    <div class="titre ml-2 mb-4 ">Journée du Monde Professionnel (JMP)</div>
                                    <div class="d-flex" style="gap: 30%;">
                                        <div class="d-flex">
                                            <img src="../assets/images/calendrier 1.png" class="mt-4 ml-2" style="width: 20px; height: 20px;" alt="">
                                            <div class="ml-12">Avril 2022</div>
                                        </div>
                                        <div>Voir plus...</div>
                                    </div> 
                                </div>
                            </div> 
                        </div>

                      
                    </v-col>
                    <v-col>
                        <div class="bloc">
                            <img src="../assets/images/Rectangle14.png" class="" alt="">
                            <div class="card">
                                <img src="../assets/images/Rectangle 15 (1).png" class="" alt="">
                                <div class="container">
                                    <div class="titre ml-2 mb-4 ">Journée du Monde Professionnel (JMP)</div>
                                    <div class="d-flex" style="gap: 30%;">
                                        <div class="d-flex">
                                            <img src="../assets/images/calendrier 1.png" class="mt-4 ml-2" style="width: 20px; height: 20px;" alt="">
                                            <div class="ml-12">Avril 2022</div>
                                        </div>
                                        <div>Voir plus...</div>
                                    </div> 
                                </div>
                            </div> 
                        </div>

                      
                    </v-col>
                </v-row>
                <v-row class="mb-16">
                    <v-col>
                        <div class="bloc">
                            <img src="../assets/images/Rectangle14.png" class="" alt="">
                            <div class="card">
                                <img src="../assets/images/Rectangle 15 (1).png" class="" alt="">
                                <div class="container">
                                    <div class="titre ml-2 mb-4 ">Journée du Monde Professionnel (JMP)</div>
                                    <div class="d-flex" style="gap: 30%;">
                                        <div class="d-flex">
                                            <img src="../assets/images/calendrier 1.png" class="mt-4 ml-2" style="width: 20px; height: 20px;" alt="">
                                            <div class="ml-12">Avril 2022</div>
                                        </div>
                                        <div>Voir plus...</div>
                                    </div> 
                                </div>
                            </div> 
                        </div>

                      
                    </v-col>
                    <v-col>
                        <div class="bloc">
                            <img src="../assets/images/Rectangle14.png" class="" alt="">
                            <div class="card">
                                <img src="../assets/images/Rectangle 15 (1).png" class="" alt="">
                                <div class="container">
                                    <div class="titre ml-2 mb-4 ">Journée du Monde Professionnel (JMP)</div>
                                    <div class="d-flex" style="gap: 30%;">
                                        <div class="d-flex">
                                            <img src="../assets/images/calendrier 1.png" class="mt-4 ml-2" style="width: 20px; height: 20px;" alt="">
                                            <div class="ml-12">Avril 2022</div>
                                        </div>
                                        <div>Voir plus...</div>
                                    </div> 
                                </div>
                            </div> 
                        </div>

                      
                    </v-col>
                </v-row>
            </v-col>
  
            <v-divider vertical class="" style="height: 1300px; "></v-divider>
            <v-col :cols="3" class="">
                <div class="border d-flex align-center justify-space-between pa-1 " style="width: 268px;height: 39px; top:331px ; border-radius: 5px; color: rgba(33, 40, 50, 1);"> 
                    <div>Recherche </div>
                    <img src="../assets/images/search.png" style="width: 20px; height: 20px;" alt="recherche">
                </div>
                <div class="mt-15 membres" >
                    <div class="">Membres</div>
                    <v-list>
                        <v-list-item v-for="(item, index) in items" :key="index">
                        <v-list-item-avatar>
                            <v-img :src="commonImage" alt="Image commune" height="20" width="20"></v-img>
                        </v-list-item-avatar>
    
                        <v-list-item-content>
                            <v-list-item-title>{{ item.phrase }}</v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </div>
                <div class="border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum minima minus deleniti ullam? Laudantium iste, hic perspiciatis sit quidem aut atque optio quos reprehenderit temporibus corrupti ex asperiores ea.
                </div>
                <div class="border">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum minima minus deleniti ullam? Laudantium iste, hic perspiciatis sit quidem aut atque optio quos reprehenderit temporibus corrupti ex asperiores ea.
                </div>
  
            </v-col>
          
        </v-row>
    </v-container>
  
    
  </template>

  <style scoped>
 .card{
    height: 137;
    position: relative;
    /* background-image: url("../assets/mages/Rectangle 15 (1).png"); */
    margin-top: -100px;
 }

 .card img{
    position: absolute;
    width: 330px;
    left: 13px;
    top: -28px;
    border-radius: 0px, 0px, 24px, 24px;

 }

 .container{
    position: relative;

 }



 .container img{
    top: 20px;
 }

 .bloc{
    box-shadow: 0px 30px 30px 4px rgba(0, 0, 0,0.1);
    width: 327px;
    height: 396px;
    border-radius:24px;

 }

 .bloc img{
    margin-left: -14px;
 }

 .titre{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22.41px;
    color: rgba(94, 98, 130, 1);
 }

 .titre + div{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 19.92px;
    color: rgba(94, 98, 130, 1);
 }

 .membres{
    font-size: 17px;
    font-weight: 400px;
    line-height: 20.45px;
    color: rgba(33, 40, 50, 1);
    font-family: 'Actor', sans-serif;
 }

 </style>
  
  
  
  <script>
  export default {
  name: 'VotreComposant',
  data() {
    return {
      commonImage: '../../../src/assets/images/right-arrow_3839915 1.png', // Remplacez par l'URL de votre image commune
      items: [
        { phrase: 'Première phrase avec une image' },
        { phrase: 'Deuxième phrase avec une image' },
        { phrase: 'Troisième phrase avec une image' },
        { phrase: 'Troisième phrase avec une image' },
        // Ajoutez d'autres éléments de liste au besoin
      ]
    };
  }
  // Autres options du composant
  }
  </script>