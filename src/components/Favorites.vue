<template>
  <div
    v-if="size > 0"
    class="text-center fixed-bottom favorites pt-4 shadow">
    <div class="mb-3 ">
      <button
        class="btn btn-secondary btn-pokemon mr-1"
        @click="filtro()">
        <i class="fas fa-list"></i>
        All
      </button>
      <button
        class="btn btn-secondary btn-pokemon ml-1"
        @click="filtro()">
        <i class="fas fa-star"></i>
        Favorites
      </button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  props: ['size'],
  setup(){
    const store = useStore()

    const filtro = () => {
      store.dispatch('filterFavs')
    }

    return {filtro}
  }
}
</script>

<style>
  .favorites {
    background: #fff;
  }
</style>