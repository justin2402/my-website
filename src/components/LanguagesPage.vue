<template>
  <div >


    <v-row style="margin:0">
      <v-col cols="6">
        <h4 style="padding-bottom: 15px">Tools</h4>
        <div style="margin: 5px" :key="n" v-for="(language, n) in tools">
          <h6 style="padding: 10px; font-size: 10px">{{language}}</h6>
        </div>

      </v-col>
      <v-col cols="6">

        <h4 style="padding-bottom: 15px">Languages</h4>
        <div style="margin: 5px" :key="n" v-for="(language, n) in languages">
          <h6 style="padding: 10px;font-size: 10px">{{language}}</h6>
        </div>
      </v-col>
    </v-row>

    <div class="back-button">
      <a  href="/more-info" >Back</a>
    </div>

  </div>
</template>

<script>
export default {
  name: "LanguagesPage",
  data(){
    return{
      languages:['Javascript','C#','Java','SQL','Python','Dart','HTML/CSS'],
      tools:['React.js/Native', 'Vue.js','Entity & Identity Framework','Xamarin', 'Spring','MYSQL/MSSQL', 'Firebase', ]
    }
  }
}
</script>

<style scoped>

</style>