<template>
    <section class="ma-10">
      <h3 class="text-center font-weight-bold">Membres du Bureau Actuel</h3>
      <!-- <v-container> -->
        <v-carousel cycle hide-delimiters class="carousel">
            <v-carousel-item v-for="(group, groupIndex) in groupedItems" :key="groupIndex">
                <v-row no-gutters class="d-flex row">
                    <v-col v-for="(item, index) in group" :key="index" cols="12" sm="4">
                        <v-card class="my-5 rounded-xl elevation-2 py-10 card" max-width="290" height="auto">
                            <v-img height="auto" width="auto" :src="item.image"></v-img>
                            <v-card-item>
                                <v-card-title class="font-weight-bold">{{ item.name }}</v-card-title>
                            </v-card-item>
                            <v-row>
                                <v-card-text class="text-center">{{ item.poste }}</v-card-text>
                                <v-card-text class="text-center">{{ item.level }}</v-card-text>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>        
        <v-row class="d-flex justify-center">
          <v-btn variant="tonal" class="btn"> Voir les anciens bureaux </v-btn>
        </v-row>
      <!-- </v-container> -->
    </section>
  </template>
  
  <script>
  import girl_pull_rouge from "../../assets/images/jeune-femme-coupe-cheveux-afro-portant-pull-rose.jpg";
  
  export default {
    data() {
      return {
        items: [
          {
            image: girl_pull_rouge,
            name: "Merveille AIZANNON",
            poste: "Président du Bureau Exécutif",
            level: "RT 2",
          },
          {
            image: girl_pull_rouge,
            name: "Hermann d'ALMEIDA",
            poste: "Secrétaire Général",
            level: "RII 1",
          },
          {
            image: girl_pull_rouge,
            name: "Térence GAUTHE",
            poste: "Trésorier Général",
            level: "RT 1",
          },
          {
            image: girl_pull_rouge,
            name: "Fadel SEWADE",
            poste: "Responsable Section 1",
            level: "RII 1",
          },
          {
            image: girl_pull_rouge,
            name: "Marzoukath AGBODJA",
            poste: "Secrétaire Section 1",
            level: "GIT3",
          },
          {
            image: girl_pull_rouge,
            name: "Peniel SEWADE",
            poste: "Responsable Section 1",
            level: "RII 1",
          },
          {
            image: girl_pull_rouge,
            name: "Arcadius AGOSSOU",
            poste: "Secrétaire Section 1",
            level: "RII 1",
          },
          {
            image: girl_pull_rouge,
            name: "Philipp ADDA",
            poste: "",
            level: "RII 1",
          },
          {
            image: girl_pull_rouge,
            name: "Will SMITH",
            poste: "Mécatronique",
            level: "RT 1",
          },
        ],
      };
    },
    computed: {
        // Groupez les éléments par groupes de trois
        groupedItems() {
        const groupSize = 3;
        const result = [];
        for (let i = 0; i < this.items.length; i += groupSize) {
            result.push(this.items.slice(i, i + groupSize));
        }
        return result;
        },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    background-color: #275B73;
    padding: 10px;
  }
  .carousel{
    /* background-color: black */
    padding-inline: 5%;
  }

  .card{
    margin-inline-start: 75px ;
  }
  
  h3 {
    font-size: 2em;
  }
  h1 {
    font-size: 3.5em;
  }

  </style>
  