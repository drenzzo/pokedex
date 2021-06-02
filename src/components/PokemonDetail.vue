<template>
  <div class="modal-header">
    <p class="text-center">
      <img :src="pokemon.image" alt="" class="img-fluid w-50">
    </p>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <!-- <span aria-hidden="true">&times;</span> -->
      <i class="fas fa-times-circle fa-white"></i>
    </button>
  </div>
  <div class="modal-body">
    <div class="card-body pt-0">
      <!-- <p class="text-center">
        <img :src="pokemon.image" alt="" class="img-fluid w-50">
      </p> -->
      <p class="card-text align-left">
        <ul class="list-group list-group-flush mb-4">
          <li class="list-group-item text-left border-bottom toCapitalFirst px-0">
            <strong>Name:</strong> {{pokemon.name}}
          </li>
          <li class="list-group-item text-left border-bottom px-0">
            <strong>Weight:</strong> {{pokemon.weight}}
          </li>
          <li class="list-group-item text-left border-bottom px-0">
            <strong>Height:</strong> {{pokemon.height}}
          </li>
          <li class="list-group-item text-left border-bottom px-0">
            <strong>Types:</strong> {{pokemon.types}}
          </li>
        </ul>
        <button
          @click="share"
          class="btn btn-danger btn-pokemon mr-1">Share to my friends</button>
        <button
          @click="setFav"
          class="btn btn-circle btn-secondary ml-1"><i class="fa fa-star" :class="[pokemon.isFav ? ' fa-yellow' : ' fa-white']"></i></button>
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  props: ['pokemon'],
  methods: {
    share() {
      this.copyText = this.pokemon.name + ', ' + this.pokemon.weight + ', ' + this.pokemon.height + ', ' + this.types
      const el = document.createElement('textarea')
      el.value = this.copyText
      el.setAttribute('readonly', '')
      el.style.position = 'absolute'
      el.style.left = '-9999px'
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  },
  setup(){
    const store = useStore()
    const setFav = (() => {
      store.dispatch('setPokemonFav')
    })
    return {setFav}
  }
}
</script>

<style>

.modal-header {
  display: inline;
  background: url('../assets/bg-modal.jpg') center center;
}

.close {
  position: absolute;
  top: 15px;
  right: 20px;
}

.list-group-item {
  border: none;
}

.span-star {
  background: #F5F5F5 !important;
  border-radius: 10px;
  padding: 3px 6px;
}

.fa-grey {
  color: #BFBFBF !important;
}

.fa-white {
  color: #FFF !important;
}

.fa-yellow {
  color: #ECA539 !important;
}

.btn-circle {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0;
  border-radius: 50%;
}

.btn-circle i {
  position: relative;
  top: -1px;
}
</style>