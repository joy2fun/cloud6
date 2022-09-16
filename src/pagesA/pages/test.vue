<template>
  <view>test
  </view>
</template>

<script>
  definePageConfig({
    navigationBarTitleText: ''
  })
  import { reactive, toRefs } from 'vue'
  export default {
    name: '',
    setup() {
      const state = reactive({
      })
      return {
        ...toRefs(state),
      }
    }
  }
</script>