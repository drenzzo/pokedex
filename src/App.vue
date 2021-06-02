<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/list">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 30px 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn-pokemon {
  border-radius: 20px;
  padding: 8px 20px;
  min-width: 140px;
}

.btn {
  border: none;
}

.btn-secondary {
  background: #BFBFBF !important;
  color: #fff;
}

.btn-danger {
  background: #F22539;
  color: #fff;
}

.centered {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

h2 {
  font-size: 1.25rem;
}

h3{
  font-size: 1rem;
}

.description {
  color: #5E5E5E
}

.toCapitalFirst {
  text-transform: capitalize;
}

</style>
