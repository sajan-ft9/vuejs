<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">Click Me</button>
  <p>Welcome</p>
  
    <teleport to=".modals" v-if="showModal2">
          <Modal  @close="toggleModal2">
          <!-- modl 2 -->
          <template v-slot>
            This is no name slots
          </template>
          <template v-slot:head>
            <h2>Login</h2>
          </template>
          <template v-slot:form>
            <input type="text" placeholder="Email">
            <input type="password" name="" placeholder="Password">
          </template>
          <template v-slot:footer>
            <button type="submit">Log in</button>
          </template>
          <!-- modl 2 close -->
          </Modal>
    </teleport>
    <div v-if="showModal">  
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <h1>hello</h1>
      <p>this is a slot example</p>
        <template v-slot:links>
          <a href="">Sign up</a>
          <a href="">More info</a>
        </template>    
    </Modal>
    </div>
    

  
 
  <button @click.alt="toggleModal">Open Modal (alt click)</button>
<br>
  <button @click="toggleModal2">Open Modal 2</button>

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
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app,.modals {
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
