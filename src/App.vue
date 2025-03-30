<script setup>
import { ref } from 'vue'
// top levelで定義されているものだけtemplateに反映される
const count = ref(2)
const count2 = ref(4)
// v-htmlディレクティブ
const message = ref('<h1>Password</h1>')
import { ref, watchEffect } from 'vue'
const count = ref(0)
import { ref, watch } from 'vue'
const count1 = ref(0)

// v-bindディレクティブ
const vueURL = ref('https://vuejs.org')
// v-onディレクティブ
function countUp() {
  count.value++
}
function clientX(event, times) {
  count.value = event.clientX * times
const isRed = ref(true)
const isBgBlue = ref(true)
const className = ref('red')
function toggleClass() {
  isRed.value = !isRed.value
  isBgBlue.value = !isBgBlue.value
}
console.log(clientX)
// key修飾子
const eventName = 'keyup'
// v-model
const userInput = ref('')
import { ref, computed } from 'vue'
// computed
// リアクティブな計算プロパティを作成する仕組み。
// 値を処理するだけ。値をセットできない。副作用を含めることができない。
// templateの関数呼び出しでもcomputedと同様の処理を行うことが可能だが、template内のものが何か実行されるとtemplate全体的に再レンダリングが発生するのでcomputedを優先して使用する
const score = ref(0)
const evaluation = computed((value) => {
  console.log(value)
  return score.value > 3 ? 'Good' : 'Bad'
// watchEffect
// リアクティブなデータの変化を監視して、自動的に処理を実行する機能
// 読み取りであれば監視する。代入では監視しない。
watchEffect(() => {
  console.log('watchEffect')
  console.log(count.value)
  // 以下のような非同期関数では正しく監視されない
  setTimeout(() => {
    console.log('after 1 second')
    console.log(count.value)
  }, 1000)
  count.value = 'hello'
})
// watch
// watchはwatchEffectと異なり、明示的に値を監視する
// 第一引数にvalueをつけない。0と同じになる。
// 第一引数に関数を入れるとwatchEffectと同じような動きになる
// newValueとoldValueが同じ値であれば第二引数は実行されない
watch(
  () => {
    console.log('watch first argument')
    return count1.value
  },
  (newValue, oldValue) => {
    console.log('watch')
    console.log('newValue', newValue)
    console.log('oldValue', oldValue)
  },
  {
    immediate: true,
  },
)
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
  <!-- watchEffect -->
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
  <!-- v-modelは双方向データバインディングのためのディレクティブ-->
  <p>{{ userInput }}</p>
  <input v-model="userInput" type="text" />
  <button @click="userInput = 'hi'">button</button>
  <!-- computed -->
  <p>{{ evaluation }}</p>
  <p>{{ score }}</p>
  <button @click="score++">+1</button>
  <button @click="count++">+1</button>
  <!-- watch -->
  <p>{{ count1 }}</p>
  <button @click="count1++">+1</button>
  <!-- <div: :class="{red: isRed, 'bg-blue':isBgBlue}">Hello</div:> -->
  <div class="border" :class="[className, { 'bg-blue': isBgBlue }]">Hello</div>
  <button @click="toggleClass">toggle</button>
</template>

<style>
.red {
  color: red;
}
.bg-blue {
  background-color: blue;
}
.border {
  border: 1px solid red;
}
</style>
