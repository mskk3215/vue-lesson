<script setup>
import { ref, reactive } from 'vue'
const title = ref('Vue.js Course')
let price = ref(9)
function increment() {
  price.value += 1
  instructor.age += 1
  instructor.bio = 'hi'
  instructor.sns.twitter = 'hello'
  instructor.email = 'info@example.com'
  info.value.students += 100
}
const info = ref({
  students: 1000,
  rating: 4,
})
const instructor = reactive({
  name: 'Yoshipi',
  age: 25,
  sns: {
    twitter: '@__yoshipi__',
    youtube: '@yoshipi',
  },
  email: ref('yoshipi@example.com'),
})
instructor.bio = 'hello'
const items = reactive([ref(1), ref(2), 3])
items.reverse
const courseInfo = {
  sections: ref(10),
  language: ref('Japanese'),
}
</script>

<template>
  <h1>{{ title }}</h1>
  <h2>{{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>Students: {{ info.students }}</h2>
  <h2>Instructor age: {{ instructor.age }}</h2>
  <h2>Instructor bio: {{ instructor.bio }}</h2>
  <h2>Instructor SNS Twitter: {{ instructor.sns.twitter }}</h2>
  <h2>Instructor email: {{ instructor.email }}</h2>
  <h2>Instructor email: {{ instructor.email }}</h2>
  <h2>Course Section: {{ courseInfo.sections.value }}</h2>
</template>
