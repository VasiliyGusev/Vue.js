<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <hr>
    <div class="grid">
      <input @keyup.enter="calc" v-model="result" placeholder="0" type="text">
      <button class="cell num" @click="input(num)" v-for="num in numbers" :key="num.id">{{ num }}</button>
    </div>
    <div class="grid">
      <button class="cell op" @click="input(op)" v-for="op in operations" :key="op.id">{{ op }}</button>
    </div>
    <div class="grid">
      <button class="cell op" @click="reset">Clear</button>
      <button class="cell op" @click="calc">=</button>
    </div>
<!--    <input v-model="textValue2" @focus="onFocus">-->
<!--    <input v-model="textValue" @blur="onBlur">-->
<!--    <button @click="result = result + 1">Click</button>-->
<!--    <hr>-->
<!--    <input v-model.number.lazy="operand1">-->
<!--    <input v-model.number="operand2">-->
<!--    <br>-->
<!--    = {{ result }}-->
<!--    <br>-->
<!--    <button @click="sum">+</button>-->
<!--    <button @click="result = operand1 - operand2">-</button>-->
<!--    <button @click="sub">/</button>-->
<!--    <button @click="multiply">*</button>-->

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      result: '',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operations: ['+','-','*','/', '**', '//']
    }
  },
  methods: {
    input(param){
      this.result = this.result.toString();
      this.result += param;
    },
    reset(){
      this.result = '';
    },
    calc(){
      if (this.result.slice(-1) == 0){
        alert('На 0 делить нельзя');
        return this.result = '';
      }
      if (this.result.includes('//')){
        return this.result = Math.trunc(eval(this.result.replace(/\/\//g, '/')))
      }
      this.result = eval(this.result)
    }
    // onBlur(){
    //   console.log(this.textValue);
    // },
    // onFocus(){
    //   console.log(this.textValue2);
    // },
    // sum(){
    //   this.result =this.operand1 + this.operand2;
    // },
    // sub(){
    //   const {operand1, operand2} = this
    //   this.result = operand1 / operand2;
    // },
    // multiply(){
    //   this.result =this.operand1 * this.operand2;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
