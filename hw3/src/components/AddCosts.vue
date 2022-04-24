<template>
  <div>
    <button class="show-btn" @click="shows" >{{ btnText }}</button>
    <div v-if="show">
      <input placeholder="Category" v-model="category" />
      <input placeholder="Value" v-model="count" />
      <input placeholder="Date" v-model="date" />
      <button class="save-btn" @click="pushData">ADD +</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "AddCosts",
  data(){
    return {
      btnText: '+ ADD NEW COST',
      show: false,
      counter: 0,
      category: '',
      count: '',
      date: ''
    }
  },
  computed: {
    getCurrentDate(){
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth();
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    }
  },
  methods: {
    shows() {
      this.show=!this.show
      if (this.show === false) {
        this.btnText = '+ ADD NEW COST';
      } else {
        this.btnText = '- HIDE INPUT';
      }
    },
    pushData(){
      this.counter++;
      const data = {
        counter: this.counter,
        date: this.date || this.getCurrentDate,
        category: this.category,
        count: this.count
      }
      this.$emit('pushData', data)
      this.date = '';
      this.category = '';
      this.count = '';
      this.shows();
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  width: 80%;
  padding: 10px;
  margin: 5px auto;
  border-radius: 8px;
  border: 1px solid #999;
}
button{
  margin: 10px;
  width: 150px;
  padding: 5px 15px;
  background-color: #42B883;
  border-radius: 3px;
  color: white;
}
button:hover{
  background-color: #2f815c;
  cursor: pointer;
}
.show-btn{
  float:left;
}
.save-btn{
  float: right;
}
</style>