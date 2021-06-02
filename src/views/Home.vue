<template>
  <div class="centered">
    <div class="home">
      <img class="mb-4" alt="Pokemon logo" src="../assets/logo.png" width="250" />
      <h1 class="mt-4">{{ title }}</h1>
      <h3 class="my-4 description">{{ description }}</h3>
      <button
        class="mt-4 btn btn-danger btn-pokemon"
        @click="goToList">Get Started</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Welcome to Pokedex',
      description: 'The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokemon world'
    }
  },
  methods: {
    goToList() {
      this.$router.push({path: 'loading'})
    }
  }
}
</script>

<style>
.home {
  padding: 0 20px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
