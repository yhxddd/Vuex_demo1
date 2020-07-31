<template>
  <div>
    <my-add></my-add>
    <p>-------------------------------</p>
    <my-sub></my-sub>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import Add from './components/Add.vue'
// eslint-disable-next-line no-unused-vars
import Sub from './components/Sub.vue'

export default {
  data () {
    return {}
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'my-add': Add,
    // eslint-disable-next-line vue/no-unused-components
    'my-sub': Sub
  }
}
</script>
