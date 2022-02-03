<template>
  <div class="home">
    Viewer
    <p> My name and age are {{name}} & {{age}}.</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>


<script>
export default {
  name: 'Home',
  setup() {
    console.log('Home setup')

    const name = 'mario'
    const age = 30

    const handleClick = () => {
      console.log('clicked')
    }

    return { name, age, handleClick }
  }
}
</script>
