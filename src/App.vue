<template>
  <div id="my-app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->

    {{hi}}
    <Mi :showme="showme"></Mi>
    <button @click="fn">点击</button>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import Mi from './components/mi.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
    data(){
      return {
          hi:100,
          showme:true,
      }
    },
  components: {
      Mi
    // HelloWorld
  },
    methods:{
      fn(){
          this.hi++;
          this.showme = !this.showme;
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
