<template>

  <div>
    <div id="app">

      <div class="outContainer">


        <div class="innerContainer">

          <p @click="doThing" class="x-icon">x</p>

          <div style="flex-direction: row; display: flex;">
            <h6 class="name-title">Justin Hidalgo</h6>

          </div>


          <div v-show="!dialog" class="app-bar-thingy">
            <h6 class="link-names"><a href="mailto:justinh8100@gmail.com">Email</a></h6>
            <h6 class="link-names"><a href="https://github.com/justin2402">Github</a></h6>
            <h6 class="link-names"><a href="https://www.linkedin.com/in/jhidalgo24/">Linkedin</a></h6>

          </div>

          <div v-show="dialog" class="app-bar-thingy">
            <h6 class="link-names">It doesn't do anything hehe</h6>

          </div>
          <router-view></router-view>

          </div>


      </div>
    </div>
  </div>

</template>

<script>


import router from "@/router";

export default {
  name: 'App',
  router,
  data() {
    return {
      imageAddress: "https://media.tenor.com/yRSnf6wABQ4AAAAj/pato-duck.gif",
      dialog:false
    }
  },
  methods:{
    async doThing(){
      this.dialog = true;
      await this.sleepyThing(2000);
      this.dialog = false;

    },
    sleepyThing(x){
      return new Promise(resolve => setTimeout(resolve,x))
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

body {
  background-color: skyblue;


}
.self-description-long:hover{
  color: skyblue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  width: 100%;


}

* {
  font-family: 'Press Start 2P', cursive;
}

.outContainer {
  width: 100%;
  height: 100%;

}

.innerContainer {
  z-index: 4;
  border-style: solid;
  text-align: center;
  margin: 5vh 7vw;
  height: 85vh;
  border-width: 2px;
  border-color: #000;
  box-shadow: 12px 10px #000000;
  border-radius: 1%;
  position: relative;
  background-color: white;

}


.back-button {
  position: absolute;
  bottom: 25px;
  right: 0;
  left: 0;
  margin-top: 25px;
  font-style: italic;


}


.name-title {
  padding: 25px 10px;
  text-shadow: 2px 2px #888;
  background-color: #99EEFF;
  width: 100%;
  box-shadow: 0px 2px #CCC;
  margin-top: 0;
}


.app-bar-thingy {
  display: flex;
  flex-direction: row;

  width: 100%;
  margin: 0;
  padding: 20px 0;
  justify-content: center;
  box-shadow: 0px 2px #999;
}

.link-names {
  margin: 0px 10px;
  text-shadow: 2px 3px #CCC;
  font-style: italic;

}


a:link {
  text-decoration: none;
  color: black;
  padding: 20px 10px;

}

a:visited {
  text-decoration: none;
  color: black;
  padding: 20px 5px;
}

a:hover {
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 20px 10px;
  text-shadow: 2px 5px #444;

}


a:active {
  text-decoration: none;
  color: skyblue;
  text-shadow: 0 0 white;
}

.self-description {
  padding: 20px;
  font-weight: bold;
  text-align: center;
}

.empty-space {
  margin: 50px
}

.self-description-long {
  font-weight: lighter;
  text-align: left;
  padding: 10px 20px;
  font-size: 15px;
}

.x-icon {
  background-color: #99EEFF;
  box-shadow: 0px 2px #CCC;
  padding-right: 6px;
  padding-top: 2px;
  color: blue;
  text-shadow: 2px 3px #000;
  text-align: right;
}

@media (min-width: 600px) and (min-height: 600px) {


  .link-names {
    margin: 0 25px
  }


  .outContainer {
    justify-items: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin-right: 200px;

  }

  .innerContainer {
    border-style: solid;
    text-align: center;
    margin: 25vh 7vw;
    height: 60vh;
    border-radius: 1%;
    margin-right: 30vw;
    margin-left: 30vw;

  }


  .self-description-long {
    font-weight: lighter;
    text-align: left;
    padding: 10px 20px;

  }


}

</style>