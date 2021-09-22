<template>
  <div>
    <b-jumbotron>
      <h1 class="display-4">Kindwijs Kindercoaching</h1>
      <p class="lead">
        <i>‘An hour of play reveals more than a year of conversation’</i>
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {}
</script>

<style>
.jumbotron {
  text-align: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('~assets/header.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: white;
  margin-bottom: 0 !important;
  border-radius: 0;
}

h1 {
  font-family: 'kirsten', sans-serif;
  font-size: 3rem;
}

i {
  font-weight: 200;
}
</style>
