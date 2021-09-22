<template>
  <div class="page">
    <Header />
    <NavBar />
    <b-container class="container">
      <slot></slot>
    </b-container>
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.container {
  padding-top: 2em;
  flex-grow: 1;
}
</style>
