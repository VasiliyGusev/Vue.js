<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <hr>
    <div class="radio">
      <input type="radio" id="one" value="operand1" v-model="picked">
      <label for="one">Поле один</label>
    </div>
    <div class="radio">
      <input type="radio" id="two" value="operand2" v-model="picked">
      <label for="two">Поле два</label>
    </div>

    <div class="grid">
      <input v-model.number.lazy="operands1"  placeholder="0" @focus="picked = 'operand1'" v-focus>
      <input v-model.number.lazy="operands2" placeholder="0" @focus="picked = 'operand2'">
    </div>
    <KeyBoardOpen :picked="picked" @pushInt="pushInt"></KeyBoardOpen>
    <CulcButton :operands1="operands1" :operands2="operands2" @clearInt="clearInt" @backspacer="backspacer"></CulcButton>

  </div>
</template>

<script>
import KeyBoardOpen from '@/components/KeyBoardOpen'
import CulcButton from '@/components/CulcButton'
export default {
  name: 'HelloWorld',
  components: {KeyBoardOpen, CulcButton},
  props: {
    msg: String
  },
  directives: { focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  data(){
    return {
      picked: 'operand1',
      operands1: '',
      operands2: ''
    }
  },
  methods: {
    pushInt(el){
      if (this.picked === 'operand1'){
        this.operands1 += el;
      }
      if (this.picked === 'operand2'){
        this.operands2 += el;
      }
    },
    backspacer() {
      if (this.picked === 'operand1'){
        this.operands1 = this.operands1.toString().slice(0, -1);
      }
      if (this.picked === 'operand2'){
        this.operands2 = this.operands2.toString().slice(0, -1);
      }
    },
    clearInt(){
      this.operands1 = '';
      this.operands2 = '';
    }
  }
}
</script>

