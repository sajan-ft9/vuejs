<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click Me</button>
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>

import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components:{ Modal },
  data(){
    return{
      title: "My first Vue App :)",
      header : "Sign up for the Giveaway",
      text: "Grab you gear and let's go !",
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
<style scoped>
h1{
  border-bottom:1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
