<template>
  <div class="centered">
    <img src="../assets/pokeball.gif" width="150">
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(()=>{
      this.$router.push({path: '/list'})
    }, 3000)
  }
}
</script>