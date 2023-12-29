<template>
    <section class="mt-16">
        <v-row>
            <v-col>
                <div class="d-flex" >
            <div class=" container">
                <div class="section_title mb-3">Rejoindre le cercle</div>
                <div class="section_subtitle ml-5 mb-10" > Rejoindre Le CERADEI De Trois Façons</div>
                <div class="d-flex flex-column " style="font-family: 'Poppins', sans-serif;font-size: 16px; gap: 30px;" >
                    <div class="d-flex bloc1  ml-6"  >
                        <ElectionIcon class="icon "/>
                        <div class="text_1">
                            <div class="titre ">Par les élections</div>
                            <p>Vous postulez dans la périodes électorale. Vous êtes ainsi un membre actif</p>
                        </div>
                    </div>

                     <div class="d-flex bloc2  ml-6">
                        <RecommandationIcon class="icon" />
                        <div class="text_2">
                            <div class="titre">Par recommandations</div>
                            <p> Vous avez un potentiel reconnu par la majorité... Vous pouvez être recommandé au cercle.</p>
                        </div>
                    </div> 

                   <div class="d-flex  bloc3 ml-6">
                        <CollaborationIcon class="icon" />
                        <div class="text_3">
                            <div class="titre">Par collaboration</div>
                            <p>Vous êtes un ancien étudiant, étudiant actuel ou
                                        enseignant  du département, souhaitant juste aider le cercle.
                                            Vous êtes ainsi un membre passif. 
                            </p>
                        </div>
                    </div> 
                </div>  
            </div>
            <div class="section_image">
               <img src="../../assets/images/Rectangle 14 (1).png" alt="" class="image">
            </div>
        </div>
            </v-col>
        </v-row>
        <v-row class="  justify-center " style="position: absolute; margin-top: 550px; margin-left: 500px;">
          <v-col class=" text-center d-flex justify-center align-center enveloppe">
            <v-btn variant="" class="btn "> En savoir plus</v-btn>
          </v-col>
        </v-row> 
        
    </section>
</template>

<style scoped>
    section {
        position: relative;
        display: grid;
        margin: 20px;
        padding-inline-start: 50px;
        grid-template-areas: "section-title    section-title    section-title    section-title section-title"
                             "section-subtitle section-subtitle section-subtitle section-image section-image"
                             "first-icon       text-1           text-1           section-image section-image"
                             "second-icon      text-2           text-2           section-image section-image"
                             "third-icon       text-3           text-3           section-image section-image"
                             "button-div       button-div       button-div       empty-div     empty-div";
    }

    .container{
        width:578px ;
        height: 532px;
        border-radius: 13px;
    }
    .empty_div{
        grid-area: empty-div;
    }

    
    .icon{
        height: 48px;
        width: 47px;
        border-radius: 13px;
        margin-right: 20px;
    }

    .section_title{
        grid-area: section-title ;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        line-height: 27px;
        font-weight: 600;
        color: rgba(94, 98, 130, 1);
    } 
    .button_div{
        grid-area: button-div ;
        display: flex;
        justify-content: flex-end;
    } 

    .bloc1{
        width: 386px;
        height: 64px;
        border-radius: 13px;
    }

    .bloc2{
        width: 477px;
        height: 64px;
        border-radius: 13px;
    }

    .bloc3{
        width: 556px;
        height: 105px;
        border-radius: 13px;
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
   

    .section_image{
        grid-area: section-image;
        width: 484px;
        height: 457px;
        border-radius: 24px;
        box-shadow: 0px 1.8518518209457397px 3.1481480598449707px 0px rgba(0, 0, 0, 0);
        box-shadow: 0px 8.148148536682129px 6.518518447875977px 0px rgba(0, 0, 0, 0.01);
        box-shadow: 0px 20px 13px 0px rgba(0, 0, 0, 0.01);
        box-shadow: 0px 38.51852035522461px 25.481481552124023px 0px rgba(0, 0, 0, 0.01);
        box-shadow: 0px 64.81481170654297px 46.85185241699219px 0px rgba(0, 0, 0, 0.02);
        box-shadow: 0px 100px 80px 0px rgba(0, 0, 0, 0.02);

    }

    .section_subtitle{
        grid-area: section-subtitle;
        font-size: 50px;
        font-family: 'Volkhov', sans-serif;
        line-height: 64.5px;
        font-weight: 700;
        color: rgba(20, 24, 62, 1);
       width: 560px;
       height: 130px;
    }

    .second_icon{
        grid-area: second-icon ;
    } 
    .third_icon{
        grid-area: third-icon ;
    } 
    .first_icon{
        grid-area: first-icon ;
    } 
    .text_2{
        grid-area: text-2;
    }
    .text_3{
        grid-area: text-3;
    }

    .text_1{
        grid-area: text-1;
    }

    .titre{
        height: 20px;
        color: rgba(94, 98, 130, 1);
        font-weight: 700;
        line-height: 19.92px;
    }

    .titre + p{
        font-weight: 400; 
        color: rgba(94, 98, 130, 1);

    }


</style>

<script setup> 
    import CollaborationIcon from '../icons/IconCollaboration.vue';
    import ElectionIcon from '../icons/IconElection.vue';
    import RecommandationIcon from '../icons/IconeRecommandation.vue';
</script>