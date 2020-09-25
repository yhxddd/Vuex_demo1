<template>
  <div>
    <!--<h3>当前最新的count值为: {{$store.state.count}}</h3>-->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandler1">+1</button>
    <button @click="btnHandler2">+N</button>
    <button @click="btnHandler3">异步+1</button>
    <button @click="btnHandler4">异步+N</button>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    btnHandler1 () {
      // 调用mutations 中的函数 进行数据操作
      // 触发mutations 的第一种方式
      // commit用于触发函数
      this.$store.commit('add')
    },
    btnHandler2 () {
      this.$store.commit('addN', 3)
    },
    btnHandler3 () {
      // dispatch 用于触发某actions的第一种方式：
      this.$store.dispatch('addAsync')
    },
    btnHandler4 () {
      this.$store.dispatch('addNAsync', 5)
    }
  }
}
</script>
