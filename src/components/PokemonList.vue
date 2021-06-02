<template>
  <div
    class="row"
    v-show="pokemones.length > 0">
    <ul class="list-group px-3"
      v-for="item in pokemones" :key="item.name">
        <Pokemon :item="item" :index="item.name"/>
    </ul>
  </div>
  <div
    class="row"
    v-show="pokemones.length === 0">
    <div class="col-12">
      <h1>Uh oh!</h1>
      <h3 class="description">You look lost on your journey!</h3>
      <button
        class="btn btn-danger btn-pokemon mt-3"
        @click="goToHome">Go back home</button>
    </div>
  </div>
  <Favorites :size="pokemones.length" />
</template>

<script>
import Pokemon from './Pokemon'
import Favorites from './Favorites'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  methods: {
    goToHome() {
      this.$router.push({path: '/'})
    }
  },
  components: {
    Pokemon,
    Favorites
  },
  setup(){
    const store = useStore()
    const pokemones = computed(() => {
      return store.getters.allPokemones
    })
    onMounted(async() => {
      await store.dispatch('getPokemones')
      await store.dispatch('filterName', '')
    })
    return {pokemones}
  }
}
</script>

<style>
.list-group{
  width: 100%;
}
</style>