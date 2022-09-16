<template>
  <view class="index">
    <button @tap="test">test</button>
    <Counter />
  </view>
</template>

<script>
import './index.scss'
import Counter from '../../components/Counter.vue'
import Taro from '@tarojs/taro'

export default {
  name: 'Index',
  components: {
    Counter
  },
  methods: {
    test() {
      Taro.navigateTo({url: '/pagesA/pages/test'})
    }
  }
}
</script>
