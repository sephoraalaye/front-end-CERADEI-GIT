<template>
    <v-row class="mx-10 my-15 newletter">
        <v-col class="">
            <div class="cadre ml-15 mt-1  d-flex flex-column align-center font-weight-600 justify-space-between ">
                <div class="my-15  text-center">Souscrire pour se mettre au parfum de nos news</div>
                <v-form class="d-flex flex-row align-center  mb-15" style="width: 70%;">
                    <v-text-field label="Votre adresse email" v-model="email" prepend-icon="mdi-email-outline"  Solo
            hide-details class="fill-height-input custom-text-field" style="background-color: #fff !important;" ></v-text-field>
                    <v-btn type="submit" class="text-center ms-10 h-100 envoyer" style="width: 28%;">Souscrire</v-btn>
                </v-form>
            </div>
            <div class="image">
                <img src="../../assets/images/Group 5.png" alt="">
            </div>
        </v-col>
    </v-row>
</template>

<style scoped>
    .newletter{
        height: 77vh;
    }
    .cadre{
        width: 87%;
        height: 86%;
        border-radius:129px 20px 20px 20px ;
        opacity: 0,2;
        background-color: #DFD7F9;
        font-family: 'Poppins', sans-serif;
        font-size: 31px;
        line-height: 54px;
        color: #5E6282;
    }
    .image{
        position: relative;
        left: 88%;
        top: -18%;
    }
    .texteformulaire{
        margin-bottom: 5%;
        height: 12vh;
        width: 10%;
    }
.fill-height-input {
  height: 100%;
}

.envoyer{
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 17px;
    line-height: 23.15px;
    background-color: #FF946D;
    color: #fff;
}

.custom-text-field{
    font-size: 14px;
    line-height: 17.07px;
    color: #39425D;
    font-family: 'Montserrat', sans-serif;
    background-color: #fff; /* Couleur de fond blanche */
    /* border: 1px solid #ccc; */
}


</style>

<script>
import { mdiEmailOutline } from '@mdi/js';

export default {
  name: "VotreComposant",
  components: {
    
  },
  data() {
    return {
      path: mdiEmailOutline,
    }
  }
}
</script>