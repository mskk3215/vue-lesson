<script setup>
import { ref } from 'vue'
// top levelで定義されているものだけtemplateに反映される
const count = ref(2)
const count2 = ref(4)
// v-htmlディレクティブ
const message = ref('<h1>Password</h1>')

// v-bindディレクティブ
const vueURL = ref('https://vuejs.org')
// v-onディレクティブ
function countUp() {
  count.value++
}
function clientX(event, times) {
  count.value = event.clientX * times
}
console.log(clientX)
// key修飾子
const eventName = 'keyup'
</script>
<template>
  <!-- templateには単一の式のみかける -->
  <div>{{ count + count2 }}</div>
  <div>{{ count > 3 ? 'Yes' : 'No' }}</div>
  <!-- v-htmlディレクティブはhtmlを描画するためのもの -->
  <div v-html="message"></div>
  <!-- v-bindディレクティブは要素の属性 (HTML 属性やカスタム属性) に動的な値を結び付けるために使用 -->
  <a :id :href="vueURL" :foo>Vue.js</a>
  <!-- v-onディレクティブはイベントを設定する -->
  <p>{{ count }}</p>
  <!-- インラインハンドラー -->
  <button @click="count++">button</button>
  <button @click="count = $event.clientX">button</button>
  <!-- メソッドハンドラー -->
  <button @click="countUp($event, 5)">button</button>
  <!-- イベント修飾子(stop, prevent) -->
  <div @click="count++">
    <!-- .stop：イベントが親要素に伝播するのを止める。 -->
    <button @click.stop="count = 30">button</button>
    <!-- .prevent → 既定動作を「予防」する。 -->
    <a href="https://vuejs.org" @click.prevent.stop>Vue.js</a>
  </div>
  <!-- キー修飾子 -->
  <input type="text" @keyup.space.delete="count++" />
  <!-- scriptでキー修飾子を指定することもできる。 -->
  <input type="text" @[eventName].space.delete="count++" />
</template>
