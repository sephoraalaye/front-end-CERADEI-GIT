<template>
    <div>
        <v-row class="d-flex flex-direction:row ms-15">
            <v-col>
                <img  src="../assets/images/CERADEI1.png" alt="icone de CERADEI-GIT">
                <div>ceradei-git@gmail.com</div>
                <div>+888-888-88</div>
                <img src="../assets/images/Shape.png" style="width: 162px; height: 123px; margin-top: 60px;" alt="">
            </v-col>
            <v-col>
                <div class="titre mb-5">Links</div>
                <div class="options">
                    <div>Accueil</div>
                    <div>Espace académique</div>
                    <div>Espace culturel</div>   
                    <div>Explorer</div>    
                    <div>A propos</div>   
                    <div>Nous rejoindre</div> 
                </div> 
            </v-col>
            <v-col>
                <div class="titre mb-5">Help & Support</div>
                <div class="options">
                    <div>FAQ</div>
                    <div>Blog</div>
                    <div>Contact Us</div>   
                    <div>Support</div> 
                </div>  
            </v-col>
            <v-col>
                <div class="titre mb-5">Notre adresse</div>
                <div class="options">Département de GIT. EPAC-UAC</div>  
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center my-10">
            <r-col class="footerPhrase d-flex justify-center">
                All rights reserved@bkl.co
            </r-col>
        </v-row>
    </div>
    
</template>

<style scoped>
img{
    width: 178px;
    height: 178px;
  }
.titre{
    font-family: 'PT Serif', serif;
    font-size: 28px;
    line-height: 37.1px;
} 
.options{
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    line-height: 41px;
    color:#343434 ;
} 
.footerPhrase{
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17.43px;
    color: #5E6282;
}
</style>

<script>
export default {
    
}
</script>