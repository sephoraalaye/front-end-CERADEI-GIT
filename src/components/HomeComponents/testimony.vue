<template>
    <v-container class="" style="margin-top: 120px;">
        <v-row>
            <v-col class="mx-15 temoignages d-flex">
                <div class=" titres">
                    <h3 >TEMOIGNAGES</h3>
                    <h1>Que disent les étudiants de nous?</h1>
                    <img src="../../assets/images/Group 61.png" style="margin-top: 150px;" alt="">
                </div>
                <div class="temoignage" style="box-shadow: 10px 0px 60px  rgba(0, 0, 0, .2); ">
                    <div class=" commentaire " style="z-index: 99;">
                       <img src="../../assets/images/Image.png" alt="photo de celui qui témoigne">
                        <div style="position: relative;bottom:45px;left: 30px;padding: 6%; width: 76% ; border-radius: 10px; ">
                            <div class="phrase mb-5">“Ce cercle a fait ses preuves en matière de vonlonté.Ce cercle a fait ses preuves en matière de vonlonté.”</div>
                        <div class="auteur">Mike taylor</div>
                        <div class="laclasse">4ème, RII</div>
                        </div>
                    </div>
                    <div class="commentaire " style="z-index:0;" >
                        <div style="position: relative;bottom:190px;left: 60px; padding: 4%; width: 76% ; border-radius: 10px; border: 2px solid  rgba(247, 247, 247, 1);">
                            <div class="phrase mb-5" style="visibility: hidden;">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</div>
                        <div class="auteur">Kaith BKL</div>
                        <div class="laclasse">5ème , RT.</div>
                        </div>
                    </div>
                    <div  style="position: absolute; margin-top: -400px; margin-left: 600px;">
                        <img src="../../assets/images/Pagination.png" alt="">
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
    box-shadow: 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0);
    box-shadow: 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 20px 13px 0px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02);
    box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.02);


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