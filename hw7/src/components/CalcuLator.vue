<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <div class="radio">
      <input
        id="one"
        v-model="picked"
        type="radio"
        value="operand1"
      >
      <label for="one">Поле один</label>
    </div>
    <div class="radio">
      <input
        id="two"
        v-model="picked"
        type="radio"
        value="operand2"
      >
      <label for="two">Поле два</label>
    </div>

    <div class="grid">
      <input
        v-model.number.lazy="operands1"
        v-focus
        name="operand1"
        placeholder="0"
        @focus="picked = 'operand1'"
      >
      <input
        v-model.number.lazy="operands2"
        name="operand2"
        placeholder="0"
        @focus="picked = 'operand2'"
      >
    </div>
    <input
        id="check"
        type="checkbox"
        @click="show=!show"
        name="showOf"
    >
    <label for="check">Показ клавиатуры</label>
    <div
        v-if="show"
        class="grid"
    >
      <button
          v-for="num in numbers"
          :key="num.id"
          class="cell num"
          @click="inputInt(num)"
          v-bind:name="num"
      >
        {{ num }}
      </button>
    </div>
    <div class="grid">
      <button
          v-for="op in operations"
          :key="op.id"
          class="cell op"
          @click="calc(op)"
          v-bind:name="op"
      >
        {{ op }}
      </button>
    </div>
    <div class="grid">
      <button
          class="cell op"
          @click="backspace"
          name="backspace"
      >
        Backspace
      </button>
    </div>
    <div class="grid">
      <button
          class="cell op"
          @click="reset"
          name="Clear"
      >
        Clear
      </button>
    </div>
    <div class="result">
      Результат: {{ result }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcuLator',
  directives: { focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  props: {
    msg: String
  },
  data(){
    return {
      picked: 'operand1',
      operands1: '',
      operands2: '',
      show: false,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operations: ['+','-','*','/', '**', '//'],
      result: 0
    }
  },
  methods: {
    inputInt(el){
      if (this.picked === 'operand1'){
        this.operands1 += el;
      }
      if (this.picked === 'operand2'){
        this.operands2 += el;
      }
    },
    backspace() {
      if (this.picked === 'operand1'){
        this.operands1 = this.operands1.toString().slice(0, -1);
      }
      if (this.picked === 'operand2'){
        this.operands2 = this.operands2.toString().slice(0, -1);
      }
    },
    reset(){
      this.result = 0;
      this.operands1 = '';
      this.operands2 = '';
    },
    calc(el = '+'){
      switch (el) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
        case "**":
          this.degree();
          break;
        case "//":
          this.truncs();
          break;
      }
    },
    add(){
      this.result = parseInt(this.operands1) + parseInt(this.operands2)
    },
    substract(){
      this.result = parseInt(this.operands1) - parseInt(this.operands2)
    },
    multiply(){
      this.result = parseInt(this.operands1) * parseInt(this.operands2)
    },
    divide(){
      this.result = parseInt(this.operands1) / parseInt(this.operands2)
    },
    degree(){
      this.result = parseInt(this.operands1) ** parseInt(this.operands2)
    },
    truncs(){
      this.result = Math.trunc(parseInt(this.operands1) / parseInt(this.operands2))
    }
  }
}
</script>

