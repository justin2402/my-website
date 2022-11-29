<template>
  <div class="innerContainer">
    <h5 class="name-title">Justin Hidalgo ヽ(•_•)ノ</h5>
    <div class="app-bar-thingy">
      <h6 class="link-names"><a href="mailto:justinh8100@gmail.com">Email</a></h6>
      <h6 class="link-names"><a href="https://github.com/justin2402">Github</a></h6>
      <h6 class="link-names"><a href="https://www.linkedin.com/in/jhidalgo24/">Linkedin</a></h6>
    </div>

    <h5 class="self-description">Tools I know</h5>

    <v-row>
      <v-col>
        <h4 style="padding-bottom: 15px">Tools</h4>
        <div style="margin: 5px" :key="n" v-for="(language, n) in tools">
          <h6 style="padding: 10px">{{language}}</h6>
        </div>

      </v-col>
      <v-col>

        <h4 style="padding-bottom: 15px">Languages</h4>
        <div style="margin: 5px" :key="n" v-for="(language, n) in languages">
          <h6 style="padding: 10px">{{language}}</h6>
        </div>
      </v-col>
    </v-row>

    <div style="position: absolute; bottom: 10px; right: 0; left: 0;">
      <p >Back</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguagesPage",
  data(){
    return{
      languages:['Javascript','C#','Java','SQL','Python','Dart','HTML/CSS'],
      tools:['React.js', 'React Native','Vue.js','Entity & Identity Framework','Xamarin', 'Spring','MYSQL/MSSQL', 'Firebase', ]
    }
  }
}
</script>

<style scoped>

</style>