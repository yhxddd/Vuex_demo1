<template>
  <div>
    <!--<h3>当前最新的count值为:{{ count }}</h3>-->
    <h3>{{showNum}}</h3>
    <button @click="btnHandler1">-1</button>
    <button @click="subN(3)">-N</button>
    <button @click="btnHandler3">异步-1</button>
    <button @click="btnHandler4">异步-N</button>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import { mapState } from 'vuex'
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import { mapMutations } from 'vuex'
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import { mapActions } from 'vuex'
// eslint-disable-next-line no-unused-vars,import/no-duplicates
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    // 组件访问state 中数据的第二种方法：
    ...mapState({
      count: state => state.count
    }),
    ...mapGetters({
      showNum: 'showNum'
    })
  },
  // 触发Mutations 中函数的第二种方法
  // 2.1 按需导入 mapMutations
  // 2.2 将要调用的函数映射为组件的methods
  methods: {
    // 若使用mapMutations 和 mapActions 可直接将映射后的函数名写在click之后
    ...mapMutations({
      sub: 'sub',
      subN: 'subN'
    }),
    // 触发Actions 中的第二种方法：
    ...mapActions({
      subAsync: 'subAsync',
      subNAsync: 'subNAsync'
    }),
    btnHandler1 () {
      this.sub()
    },
    btnHandler2 () {
      this.subN(3)
    },
    btnHandler3 () {
      this.subAsync()
    },
    btnHandler4 () {
      this.subNAsync(2)
    }
  }
}
</script>
