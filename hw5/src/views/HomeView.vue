<template>
  <div id="app" class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
      <div class="top">
        <router-link :to="{
        name: 'AddCosts',
        params: {
          section: 'Payment',
          category: 'Food'
        }, query: {value: 200}}">добавить платеж категории Food с ценой 200</router-link>
      </div>
      <div class="top">
        <router-link :to="{
        name: 'AddCosts',
        params: {
          section: 'Payment',
          category: 'Transport'
        }, query: {value: 50}}">добавить платеж категории Transport с ценой 50</router-link>
      </div>
      <div class="top">
        <router-link :to="{
        name: 'AddCosts',
        params: {
          section: 'Payment',
          category: 'Entertainment'
        }, query: {value: 2000}}">категория Entertainment с ценой 2000</router-link>
      </div>
    </div>

<!--    <header>-->
<!--      &lt;!&ndash;      <a href="#dashboard">dashboard</a> /&ndash;&gt;-->
<!--      &lt;!&ndash;      <a href="#notfound">notfound</a>&ndash;&gt;-->
<!--      <a href="dashboard">dashboard</a> /-->
<!--      <a href="notfound">notfound</a>-->
<!--    </header>-->

<!--    <AboutView v-if="page === 'dashboard'"/>-->
<!--    <NotFound v-if="page === 'notfound'"/>-->

  </div>
</template>
<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      date: "",
      category: "",
      value: ""
    }
  },
}
</script>
<!--<script>-->
<!--// import AboutView from '@/views/components/AboutView'-->
<!--// import NotFound from '@/components/NotFound'-->
<!--export default {-->
<!--  name: 'HomeView',-->
<!--  // components: {AboutView, NotFound},-->
<!--  data(){-->
<!--    return {-->
<!--      page: ''-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    setPage(){-->
<!--      // this.page = location.hash.slice(1)-->
<!--      this.page = location.pathname.slice(1)-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.setPage()-->
<!--    // window.addEventListener('hashchange', ()=>{-->
<!--    //   this.setPage()-->
<!--    // })-->
<!--    const links = this.$el.querySelectorAll('a')-->
<!--    links.forEach(link => {-->
<!--      link.addEventListener('click', (event)=>{-->
<!--        event.preventDefault()-->
<!--        history.pushState({},'', link.href)-->
<!--        this.setPage()-->
<!--      })-->
<!--    })-->
<!--    window.addEventListener('popstate', ()=>{-->
<!--      this.setPage()-->
<!--    })-->
<!--  }-->
<!--}-->
<!--</script>-->

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 100px;
  height: 100px;
}
.top{
  margin-top: 25px;
}
</style>