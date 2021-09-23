<template>
  <div class="page">
    <Header />
    <NavBar />
    <b-container fluid>
      <div class="logo-container">
        <Logo />
      </div>
      <b-container class="text-container">
        <slot></slot>
      </b-container>
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
  position: relative;
}

@media (max-width: 1200px) {
  .logo-container {
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 1200px) {
  .logo-container {
    position: absolute;
  }
}

.container-fluid {
  flex-grow: 1;
}

.text-container {
  padding-top: 2em;
  max-width: 55em;
}
</style>
