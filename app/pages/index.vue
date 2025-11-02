<script setup lang="ts">
import {ref} from 'vue'
const items = ref([
      '1. 可以介绍一下你的项目吗？是看视频做的吗？pc打开还是手机打开的？项目有遇到什么问题？',
      '2. 讲讲长列表的渲染？图片的宽高和大小都一样吗？除了监听滚动实现，你还知道什么方法吗？',
      '3. 那你是不是滚动到底部是不是全部都渲染出来了？那你全部dom都渲染出来了，滚动起来会不会比较卡？',
      '4. 你怎么适配多种不同的手机屏幕大小？',
      '5. 自适应布局有哪些方法呢？',
      '6. 我看到了你优化了加载速度，你是怎么做的这个呢？',
      '7. 除了懒加载，你还知道其他方案吗？',
      '8. async和defer有什么区别？',
      '9. 我看你这边封装了axios，你是怎么封装的呢？',
      '10. axios里面如何取消一个请求呢？',
      '11. 浏览器从输入url到渲染的整个过程',
      '12. 我看你也用到了flex布局，请你简单的介绍一下flex布局',
      '13. 讲讲Promise吧',
      '14. vue的computed和watch有什么区别呢？',
      '15. vue的响应式原理有了解吗？',
      '16. 你提到了vue2对数组的方法进行了一个重写是吧？那我动态的给对象增加一个属性可以触发响应式吗？',
      '17. vue2和vue3有什么区别呢？',
      '18. 为什么vite比webpack打包快呢？',
      '19. 说说你常见的git命令',
      '20. 代码编辑器几两道题。手写防抖和节流，手写深拷贝',
      '21. 你这边实习周期和到岗时间是多少？'
    ]
)
</script>

<template>
  <div class="flex justify-center items-center w-full h-full ">
    <div class="flex flex-wrap justify-center items-center gap-y-2  w-1/2">
      <div v-for="(item,index) in items"
           :key="index"
           class = "w-1/2 h-24 flex items-center justify-center bg-gray-200 rounded-xl text-black shadow-sm  hover:bg-black hover:text-blue-400">
        {{ item }}
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>