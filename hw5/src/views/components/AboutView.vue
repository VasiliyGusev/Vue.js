<template>
  <div>
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
import MyCosts from '@/components/MyCosts.vue'
import AddCosts from '@/components/AddCosts'
import PaymentForm from '@/components/PaymentForm'
import PaymentsDisplay from '@/components/PaymentsDisplay'
import MyPagination from '@/components/MyPagination'
import { mapMutations } from 'vuex'

export default {
  name: 'AboutView',
  components: { MyCosts, AddCosts, PaymentForm, PaymentsDisplay, MyPagination},
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
    },
    setPage(){
      this.page = location.hash.slice(1)
    }
  },
  mounted() {
    this.setPage()
    // if (!this.$router.params?.page || isNaN(this.$router.params.page)) return
    // this.cur = Number(this.$router.params.page)
  },
  created() {
    this.setPaymentListData(this.addData)
    // console.log(this.$store.state);
  }
}
</script>

<style scoped>
</style>