import { createStore } from 'vuex'

export default createStore({
  state: {
    pokemon: {
      image: '',
      name: '',
      weight: '',
      height: '',
      types: '',
      isFav: false
    },
    pokemones: [],
    pokemonesFavs: [],
    pokemonesFiltrados: [],
    viewModal: false
  },
  mutations: {
    setPokemon(state, payload) {
      state.pokemom = payload
    },
    setPokemones(state, payload) {
      state.pokemones = payload
    },
    setPokemonFav(state) {
      state.pokemon.isFav = !state.pokemon.isFav
    },
    setPokemonItemFav(state, item){
      let objIndex = state.pokemonesFiltrados.findIndex((i => i.name === item.name));
      state.pokemonesFiltrados[objIndex].isFav = item.isFav
    },
    setPokemonesFavs(state, payload) {
      state.pokemonesFavs = payload
    },
    setPokemonesFiltrados(state, payload) {
      state.pokemonesFiltrados = payload
    }
  },
  actions: {
    async getPokemon({ commit, state }, name) {
      commit('setPokemon', {})
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        const data = await res.json()
        state.pokemon.image = data.sprites.other.dream_world.front_default
        state.pokemon.name = data.name
        state.pokemon.weight = data.weight
        state.pokemon.height = data.height
        state.pokemon.types = data.types.map(item => item.type.name).toString()
        commit('setPokemon', state.pokemon)
      } catch (error) {
        console.log(error)
      }
    },
    async getPokemones({ commit }) {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data = await res.json()
        let results = []
        data.results.forEach(item => {
          let name = item.name
          results.push({name: name, isFav: false})
        });
        commit('setPokemones', results)
      } catch (error) {
        console.log(error)
      }
    },
    setPokemonFav({ commit, state }) {
      commit('setPokemonFav', !state.pokemon.isFav)
      commit('setPokemonItemFav', state.pokemon)
      commit('setPokemonesFiltrados', state.pokemonesFiltrados)
    },
    filterFavs({ commit, state }) {
      const res = state.pokemones.filter(pokemon =>
        pokemon.fav === true
      )
      commit('setPokemonesFavs', res)
    },
    filterName({ commit, state }, texto) {
      const textoCliente = texto.toLowerCase()
      const filtro = state.pokemones.filter(pokemon => {
        const textoApi = pokemon.name.toLowerCase()
        if (textoApi.includes(textoCliente)) {
          return pokemon
        }
      })
      commit('setPokemonesFiltrados', filtro)
    }
  },
  getters: {
    topPokemonesPoblacion(state) {
      return state.pokemonesFavs.sort((a, b) =>
        a.population < b.population ? 1 : -1
      )
    },
    allPokemones(state) {
      return state.pokemonesFiltrados
    },
    itemPokemon(state) {
      return state.pokemon
    }
  },
  modules: {
  }
})
