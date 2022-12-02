<template>
  <div>
    <h4 class="self-description">More About Me</h4>


    <div class="links"><a href="/my-skills" class="page-links">My Knowledge</a></div>

    <div  class="links"><a href="/my-projects" class="page-links">My Projects</a></div>

    <div  class="links"><a href="/my-hobbies" class="page-links">My Hobbies</a></div>


    <div class="back-button" >
      <a href="/#/">Back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreInfoPage"
}
</script>

<style scoped>
.page-links {

  text-shadow: 2px 2px #CCC;
  font-size: 1em;
  font-style: italic;

}
.links{
  margin:6vh;

}


.self-description {
  text-shadow: 2px 2px #CCC;
  margin-bottom: 50px;
}
</style>