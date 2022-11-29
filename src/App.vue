<template>
  <div id="app">
    <div class="outContainer">
      <div class="innerContainer">
        <h5 class="name-title">Justin Hidalgo ヽ(•_•)ノ</h5>
        <div class="app-bar-thingy">
          <h6 class="link-names"><a href="mailto:justinh8100@gmail.com">Email</a></h6>
          <h6 class="link-names"><a href="https://github.com/justin2402">Github</a></h6>
          <h6 class="link-names"><a href="https://www.linkedin.com/in/jhidalgo24/">Linkedin</a></h6>
        </div>

        <h5 class="self-description">Software Developer</h5>

        <p class="self-description-long">Hello!!</p>

        <p class="self-description-long">My name is Justin Hidalgo. I am a Web and Software developer based in
          Milwaukee, WI. </p>
        <p class="self-description-long">I love Vue, React, and C# and do the occasional Mobile Development</p>
        <p class="self-description-long">The Best way to contact me is on Linkedin :)</p>


        <div style="position: absolute; bottom: 10px; right: 0; left: 0;">
          <p >More Information</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
