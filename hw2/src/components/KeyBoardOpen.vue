<template>
  <div>
    <input id="check" @click="show=!show" type="checkbox">
    <label for="check" >Показ клавиатуры</label>
    <div class="grid"  v-if="show" >
      <button class="cell num" @click="inputInt(num)" v-for="num in numbers" :key="num.id">{{ num }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyBoardOpen",
  props: ['picked'],
  data(){
    return{
      show: false,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    }
  },
  methods:{
    inputInt(el){
      this.$emit('pushInt', el)
    },
  }
}
</script>