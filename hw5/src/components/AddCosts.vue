<template>
  <div>
    <div class="lefter">
      <button @click="shows" >{{ btnText }}</button>
    </div>

    <div v-if="show">
<!--      <select v-model="category">-->
<!--        <option v-for="(value, index) in categoryList" :key="index">{{ value }}</option>-->
<!--      </select>-->
      <input placeholder="Category"  v-model="category"/>
      <input placeholder="Value" v-model.number="count" />
      <input placeholder="Date" v-model="date" />
      <div class="righter">
        <button @click="pushData">ADD +</button>
      </div>

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
      // this.$emit('pushData', data)
      this.$store.commit('addToPaymentList', data)
      this.date = '';
      this.category = '';
      this.count = '';
      this.shows();
    },
    categoryList(){
      return this.$store.getters.getCategoryList
    }
  },
  mounted() {
    const {category, section} = this.$route.params;
    if(!category || !section) {
      return
    }
    this.shows()
    this.category = category
    const {value} = this.$route.query
    if(!value) return
    this.count = value
    if(this.count && this.category) {
      setTimeout(this.pushData, 1000);

    }
  },
  // async created() {
  //   await this.$store.dispatch('fetchCategoryList')
  // },
  // mounted() {
  //   if (this.categoryList.length){
  //     this.category = this.categoryList[0]
  //   }
  // }
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
.lefter{
  display: flex;
  flex-direction: row;
}
.righter{
  display: flex;
  flex-direction: row-reverse;
}
</style>