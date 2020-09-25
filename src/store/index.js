import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 提供唯一的公共数据源，所有共享的数据都要统一放到该位置
    count: 0
    // 组件访问state中数据的第一种方式(Add.vue)： this.$store.state.全局数据名称
    // 组件访问state中数据的第二种方式(Sub.vue)：
    //    2.1  从vuex中按需导入mapState函数
    //    2.2  通过刚才导入的mapState函数 将当前组件需要的全局数据 映射为当前组件的computed计算属性
  },
  //  只有mutations中定义的函数才有权力修改state中的数据
  mutations: {
    // 不能写异步代码 如 不能添加计时器
    // 用于变更store中的数据 不可以直接操作store的数据
    // 可以集中监控store中的数据
    // 可以在触发 mutations时传递参数
    add (state) {
      // 形参state表示 上面state：中的数据
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    // 用于处理异步操作 不能直接修改state中的数据
    // 还是要通过触发Mutations的方式变更数据
    addAsync (context) {
      // 这个context 只能提交mutations中的方法
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  modules: {},
  getters: {
    //  Getter 用于对 Store 中的数据进行加工处理形成新的数据
    //  Getter 不会修改元素 只是以另一种形式打印
    //  Store 中数据变化 Getter 的数据也变化
    showNum (state) {
      return '当前最新的数是：【' + state.count + '】'
    }
    //  组件访问getter 的第一种： $this.store.getters.getter函数名
    //  组件访问getter的第二种方法:
    //    2.1 按需导入mapGetters
    //    2.2 在computed中使用 ...mapGetters({showNum: 'showNum'})
  }
})
