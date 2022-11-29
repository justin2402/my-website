<template>
  <div id="app">
    <div class="outContainer">
      <MoreInfoPage></MoreInfoPage>
    </div>
  </div>
</template>

<script>


import MoreInfoPage from "@/components/MoreInfoPage";
export default {
  name: 'App',
  components: {MoreInfoPage}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  display: flex;


}

* {
  font-family: 'Press Start 2P', cursive;
}

.outContainer {
  justify-self: center;
  align-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
}

.innerContainer {
  border-style: solid;
  text-align: center;
  margin: 50px 7vw 0 7vw;
  height: 70vh;
  border-width: 1.5px;
  box-shadow: 12px 10px #AAA;
  border-radius: 1%;
  position: relative;
}

.name-title {
  padding: 25px 10px;
  text-shadow: 2px 2px #AAA;

}

.app-bar-thingy {
  display: flex;
  flex-direction: row;
  border-width: 1px 0;
  border-style: solid;
  width: 100%;
  margin: 0;
  padding: 20px 0;
  justify-content: center;
}

.link-names {
  margin: 0px 10px;
  text-shadow: 2px 3px #CCC;

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
  color: black;
}

.self-description {
  padding: 20px;
  font-weight: bold;
  text-align: center;
}

.empty-space{
  margin:50px
}
.self-description-long {
  font-weight: lighter;
  text-align: left;
  padding: 10px 20px;
  font-size: 15px;
}

@media (min-width: 800px) {
  .link-names {
    margin: 0px 10vw
  }

  .innerContainer {

    margin: 50px 10vw 0 10vw;

  }

  .self-description-long {
    font-weight: lighter;
    text-align: left;
    padding: 10px 20px;

  }

  .name-title {
    padding: 25px 10px;
    text-shadow: 2px 2px #AAA;
  }
}

</style>
