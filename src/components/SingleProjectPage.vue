<template>
  <div>
      <a v-show="!dialog" @click="changeDialog">{{item.title}}</a>
      <a v-show="dialog && item.websiteLink !== '' " :href="item.websiteLink">Website</a><span v-show="dialog && item.websiteLink !== '' ">/</span>
      <a v-show="dialog" :href="item.githubLink">Github</a>

  </div>
</template>

<script>


export default {
  name: "SingleProjectPage",
  props: {
    item: {
      required: true
    }
  },
  data(){
    return{
      dialog:false
    }
  },
  methods:{
    async changeDialog(){
      this.dialog = true;
      await this.sleepy(3000)
      this.dialog = false;

    },
    async sleepy(x) {
      return new Promise(resolve => setTimeout(resolve, x))
    }
  }
}
</script>

<style scoped>
.description {
  line-height: 30px;


}

</style>