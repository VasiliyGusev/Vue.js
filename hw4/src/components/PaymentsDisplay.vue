<template>
  <div>
    <p > Total cost: {{ totalCost }} ₽</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: "PaymentsDisplay",
  props: ['addData'],
  methods: {
    ...mapGetters([
      'getFullPaymentValue'
    ])
  },
  computed: {
    totalCost(){
      return this.getFullPaymentValue(this.addData)
    }
  }
}
</script>

<style scoped>
p {
  font-weight: 600;
}

</style>