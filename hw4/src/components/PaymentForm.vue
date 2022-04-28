<template>
  <div>
    <div class="title-costList">
      <div class="number-costList">#</div>
      <div class="date-costList">Date</div>
      <div class="category-costList">Category</div>
      <div class="value-costList">Value</div>
    </div>
    <template v-for="(data, index) in addData" >
      <div class="single-cost" :key="index">
        <div>{{ data.counter }}</div>
        <div>{{ data.date }}</div>
        <div>{{data.category}}</div>
        <div>{{data.count}} ₽</div>
      </div>
    </template>

<!--    <p v-for="data of addData" :key="data.id">{{data[0]}} {{data[1]}} {{data[2]}}</p>-->

  </div>
</template>

<script>
export default {
  name: "PaymentForm",
  props: ['addData']
}
</script>

<style scoped>
.title-costList{
  display: flex;
  justify-content: space-around;
  font-weight: 700;
  border-bottom: 1px solid #999;
  padding-bottom: 10px;
}
.single-cost{
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #999;
  padding: 15px 0;
}
</style>