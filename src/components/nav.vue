

<template>
   <header class="d-flex align-center " style="margin-left: 100px; gap: 15%;">
        <img src="../assets/images/CERADEI1.png" class="ml-0" alt="l'icone de Ceradei" style="" />
          <nav class="">
            <ul class="d-flex align-center">
              <li class="">
                <a href="">Acceuil</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">
              <li class="">
                <a href="">Espace académique</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">
              <li class="">
                  <a href="">Espace culturel</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class=""> 
                  <a href="/explore">Explorer</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class="">
                  <a href="">A propos</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class="">
                <a href="">Aide et support</a>
              </li>
              <img src="../assets/images/Rectangle 22.png" alt="" class="rectangle">

              <li class="" style="color: rgba(33, 40, 50, 1);border: 1px; width: 144.23px;height: 39px; top: 47px; border-radius: 5px;">
                <v-btn variant="outlined"> Nous rejoindre </v-btn>
              </li>
            </ul>
          </nav>
      </header>
</template>

<style scoped>
  img{
    width: 178px;
    height: 176px;
    top:-14px;
  }
  li{
    font-size: large;
    font-family: 'Actor', sans-serif;
    list-style: none;
    font-size: 15px;
    font-weight: 400;
    line-height: 18.05px;
    
  
  }

  li a{
    text-decoration: none;
    color: rgba(0, 0, 0,1);
  }

  header {
    top: -20px;
    height: 17vh;
  }

  .rectangle{
    width: 24px;
    height: 24px;
    top: 55px;
    left: 622px;
    rotate: -90;
    visibility: hidden;
  }


</style>

<!-- <script>
export default {
    setup() {
        
    },
}
</script> -->



