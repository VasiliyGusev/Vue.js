<template>
  <div id="app" class="hello">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyCosts msg="My Costs"/>
    <PaymentForm
        :addData="addData"/>
    <AddCosts @pushData='pushData'/>
    <PaymentsDisplay/>
  </div>
</template>

<script>
import MyCosts from './components/MyCosts.vue'
import AddCosts from '@/components/AddCosts'
import PaymentForm from '@/components/PaymentForm'
import PaymentsDisplay from '@/components/PaymentsDisplay'

export default {
  name: 'App',
  components: {MyCosts, AddCosts, PaymentForm, PaymentsDisplay},
  data(){
    return {
      addData: [],
      cur: 1,
      n: 5,
    }
  },
  methods: {
    pushData(el){
      this.addData.push(el);
    }
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
