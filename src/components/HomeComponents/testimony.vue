<template>
    <v-container>
        <v-row>
            <v-col class="border mx-15 temoignages d-flex">
                <div class="border titres">
                    <h3 >TEMOIGNAGES</h3>
                    <h1>Que disent les étudiants de nous?</h1>
                </div>
                <div class="temoignage border" style="box-shadow: 10px 0px 60px  rgba(0, 0, 0, .2); ">
                    <div class=" commentaire ">
                       <img src="../../assets/images/Image.png" alt="photo de celui qui témoigne">
                        <div style="position: relative;bottom:45px;left: 30px;padding: 6%; width: 76% ; border-radius: 10px;">
                            <div class="phrase mb-5">“Ce cercle a fait ses preuves en matière de vonlonté.Ce cercle a fait ses preuves en matière de vonlonté.”</div>
                        <div class="auteur">Mike taylor</div>
                        <div class="laclasse">4ème, RII</div>
                        </div>
                    </div>
                    <div class="  commentaire ">
                        <div style="position: relative;bottom:190px;left: 60px; padding: 4%; width: 76% ; border-radius: 10px; border: 2px solid #F7F7F7;">
                            <div class="phrase mb-5" style="visibility: hidden;">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</div>
                        <div class="auteur">Kaith BKL</div>
                        <div class="laclasse">5ème , RT.</div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
   
</template>

<style scoped>
.temoignages{
    height: 80vh;
}

.temoignages h3,.auteur{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #5E6282;
}


.temoignages .titres{
    width: 479px;
}
.temoignages h1{
    color: #14183E;
    font-family: 'Volkhov', serif;
    font-size: 50px;
    line-height: 64.5px;
    height: 130px;
    width: 100%;
}

.temoignage{
    height: 279px;
    width: 541px;
    border-radius: 10px;
}
.commentaire{
    color: #5E6282;  
    font-family: 'Poppins', sans-serif;
    width: 669px;
    /* border-color: red !important; */

}


 .phrase{
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;
    width: 402px;
    height: 96px;
}
.laclasse{
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
}

</style>


<script>
export default {
    
}
</script>