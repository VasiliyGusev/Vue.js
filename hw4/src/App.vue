<template>
  <div id="app" class="hello">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyCosts msg="My Costs"/>
    <PaymentForm
        :addData="currentElements"/>
    <AddCosts/>
    <PaymentsDisplay
        :addData="addData"/>
    <MyPagination :cur="cur" :length="addData.length" :n="n" @changePage="changePage"/>
  </div>
</template>

<script>
import MyCosts from './components/MyCosts.vue'
import AddCosts from '@/components/AddCosts'
import PaymentForm from '@/components/PaymentForm'
import PaymentsDisplay from '@/components/PaymentsDisplay'
import MyPagination from '@/components/MyPagination'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {MyCosts, AddCosts, PaymentForm, PaymentsDisplay, MyPagination},
  data(){
    return {
      addData: [],
      cur: 1,
      n: 5,
    }
  },
  computed: {
    currentElements(){
      return this.$store.getters.getPaymentList.slice(this.n * (this.cur - 1), this.n * (this.cur - 1) + this.n)
    }
  },
  methods: {
    ...mapMutations([
      'setPaymentListData'
    ]),
    // pushData(el) {
    //   this.addData.push(el);
    //
    // },
    changePage(p){
      this.cur = p

    }
  },

  created() {
    this.setPaymentListData(this.addData)
    // console.log(this.$store.state);
  }
}
</script>

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
</style>
