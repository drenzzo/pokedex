<template>
  <div class="container">
    <Filter />
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from '../components/PokemonList'
import Filter from '../components/Filter'

export default {
  name: 'App',
  components: {
    PokemonList, Filter
  }
}
</script>

