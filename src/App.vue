<script setup>
import { ref } from 'vue'
// top levelで定義されているものだけtemplateに反映される
const count = ref(2)
const count2 = ref(4)
// v-htmlディレクティブ
const message = ref('<h1>Password</h1>')

// v-bindディレクティブ
const vueURL = ref('https://vuejs.org')
</script>
<template>
  <!-- templateには単一の式のみかける -->
  <div>{{ count + count2 }}</div>
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <!-- v-htmlディレクティブはhtmlを描画するためのもの -->
  <div v-html="message"></div>
  <!-- v-bindディレクティブは要素の属性 (HTML 属性やカスタム属性) に動的な値を結び付けるために使用 -->
  <a :id :href="vueURL" :foo>Vue.js</a>
</template>
