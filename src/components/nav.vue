

<template>
   <header class="d-flex justify-space-between ma-1">
        <img src="../assets/images/CERADEI1.png" alt="l'icone de Ceradei" />
          <nav>
            <ul class="d-flex  pa-7">
              <li class="ma-2 pa-2">
                <a href="">Acceuil</a>
              </li>
              <li class="ma-2 pa-2">
                <a href="">Espace académique</a>
              </li>
              <li class="ma-2 pa-2">
                  <a href="">Espace culturel</a>
              </li>
              <li class="ma-2 pa-2"> 
                  <a href="">Explorer</a>
              </li>
              <li class="ma-2 pa-2">
                  <a href="">A propos</a>
              </li>
              <li class="ma-2 pa-2">
                <a href="">Aide et support</a>
              </li>
              <li class="ma-1 pa-2">
                <v-btn variant="outlined"> Nous rejoindre </v-btn>
              </li>
            </ul>
          </nav>
      </header>
</template>

<style scoped>
  img{
    width: 150px;
    height: 150px;
  }
  li{
    font-size: large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    list-style: none;
  }

  li a{
    text-decoration: none;
    color: black;
  }

  header {
    position: sticky;
    top: -20px;
    height: 17vh;
  }


</style>

<!-- <script>
export default {
    setup() {
        
    },
}
</script> -->



