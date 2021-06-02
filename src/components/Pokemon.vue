<template>
  <li class="list-group-item d-flex justify-content-between align-items-center mb-2">
    <button
      class="toCapitalFirst btn btn-link btn-block"
      type="button"
      @click="viewPokemonDetails(index)"
      data-toggle="modal"
      data-target="#pokemonModal">
      {{ index }}
    </button>

    <span class="span-star rounded rounded-circle">
      <i :class="[pokemon.isFav ? 'fa fa-star fa-star-yellow' : 'fa fa-star fa-star-grey']"></i>
    </span>
    <!-- <div v-if="index === pokemon.name"> -->
  </li>
  <div
    class="modal fade"
    id="pokemonModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="pokemonModalLabel"
    aria-hidden="true">
    <div
      class="modal-dialog modal-dialog-centered"
      role="document">
      <div class="modal-content">
        <PokemonDetail :pokemon="pokemon" />
      </div>
    </div>
  </div>
</template>

<script>
import PokemonDetail from './PokemonDetail'
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['item', 'index'],
  components: {
    PokemonDetail
  },
  setup(){
    const store = useStore()
    const pokemon = computed(() => {
      return store.getters.itemPokemon
    })
    const viewPokemonDetails = ((name) => {
      store.dispatch('getPokemon', name)
    });
    return {pokemon, viewPokemonDetails}
  }
}
</script>

<style>
.btn-block {
  text-align: left !important;
}

.btn-link, .btn-link:hover, .btn-link:visited, .btn-link:active, .btn-link:focus {
  padding: 0;
  color: #5E5E5E;
  text-decoration: none;
}

.list-group-item {
  border: none;
}

.span-star {
  background: #F5F5F5 !important;
  border-radius: 10px;
  padding: 3px 6px;
}

.fa-star-grey {
  color: #BFBFBF !important;
}

.fa-star-yellow {
  color: #ECA539 !important;
}
</style>