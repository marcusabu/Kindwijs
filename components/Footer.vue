<template>
  <footer>
    <div>{{ currentYear }} Copyright © Rosier kindercoaching | Kvk: 75873486</div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear() // Get the current year
    }
  }
}
</script>

<style scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 4em;
  background-color: #01b2ab !important;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 3em;
}
</style>
