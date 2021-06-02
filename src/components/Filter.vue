<template>
  <div class="form-group py-2 has-search shadow rounded">
    <span class="fa fa-search form-control-feedback"></span>
    <input
      type="text"
      class="form-control"
      placeholder="Search"
      v-model="texto"
      @keyup="procesarInput" />
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const texto = ref('')
    const store = useStore()
    const procesarInput = () => {
      store.dispatch('filterName', texto.value)
    }
    return {texto, procesarInput}
  }
}
</script>

<style>
.has-search {
  background: #fff;
  margin-bottom: 30px;
}

.has-search .form-control {
  padding-left: 2.375rem;
  border: none;
  outline:0px !important;
  -webkit-appearance:none;
  box-shadow: none !important;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

.form-rounded {
  border-radius: .25rem;
}
</style>