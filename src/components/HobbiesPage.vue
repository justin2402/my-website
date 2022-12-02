<template>
  <div>
    <h4 class="self-description">My Hobbies</h4>

    <h6 class="description">Currently I am a student at a Technical College in Wisconsin. My favorite area of programming is Web Development, but I have a good grasp of C# and Java for backend API and Database handling using SQL or NoSQL.</h6>
    &nbsp;
    <h6 class="description">I have few but fun hobbies. I really love gaming. Anything from Stardew Valley to Call of Duty. I also love going out to eat at new places! </h6>

    &nbsp;
    <h6 class="description">In my free time I enjoy learning new tools. Currently I finished learning basics for React Native enough to make a basic watchlist app using an API and Firebase. Later on I look forward to doing a little game development using my C# skills in Unity. </h6>



    <div class="back-button" >
      <a href="/more-info">Back</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HobbiesPage"
}
</script>

<style scoped>
.description{
  line-height: 13px;

}

</style>