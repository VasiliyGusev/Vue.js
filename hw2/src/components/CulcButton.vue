<template>
  <div>
    <div class="grid">
      <button class="cell op" @click="calc(op)" v-for="op in operations" :key="op.id">{{ op }}</button>
    </div>
    <div class="grid">
      <button class="cell op" @click="backspace">Backspace</button>
    </div>
    <div class="grid">
      <button class="cell op" @click="reset">Clear</button>
    </div>
    <div class="result">
      Результат: {{ result }}
    </div>

  </div>

</template>

<script>
export default {
  name: "CulcButton",
  props: ['operands1', 'operands2'],
  data(){
    return {
      operations: ['+','-','*','/', '**', '//'],
      result: 0
    }
  },
  methods: {
    reset(){
      this.result = 0;
      this.$emit('clearInt')
    },
    backspace() {
      this.$emit('backspacer')
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