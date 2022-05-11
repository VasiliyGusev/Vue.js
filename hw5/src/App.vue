<template>
  <div class="main">
    <nav>
      <div class="clickItem" @click="goToCostsPage">
        <span>GoToCosts</span>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/costs">Costs</router-link> |
      <router-link to="/notfound">NotFound</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goToCostsPage(){
      this.$router.push({
        name: 'Costs',
        params: {
          page: '3'
        }
      })
    }
  }
}
</script>

<style scoped>
.main{
  text-align: center;
}
.clickItem{
  cursor: pointer;
}
</style>
