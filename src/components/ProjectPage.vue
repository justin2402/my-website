<template>
 <div style="display: flex;flex-direction: column">
   <div style="margin: 30px"></div>


     <SingleProjectPage :item="link" class="github-links" :key="n" v-for="(link,n) in projects" v-show="dialog"   @click="displayData(link)">{{link.title}}</SingleProjectPage>

   <div class="back-button">
     <a  href="/more-info" >Back</a>
   </div>

 </div>
</template>

<script>

import SingleProjectPage from "@/components/SingleProjectPage";
export default {
  name: "ProjectPage",
  components: {SingleProjectPage},
  data(){
    return{
      projects:[
        {title:'Pokemon Project', githubLink:'https://github.com/justin2402/pokemon-website',websiteLink:'https://pokemon-deckbuild-alt-app.firebaseapp.com/#/'},
        {title:'Anime App', githubLink:'https://github.com/JHidalgo24/final-project',websiteLink: ''},

      ],
      dialog:true,
    }
  },
  methods:{
    displayData(i){
      console.log(i)
      this.dialog = false



    }
  }
}
</script>

<style scoped>


.github-links {
  padding: 20px 10px;
  margin: 10px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}


</style>