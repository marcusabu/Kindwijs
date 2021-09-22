<template>
  <b-col cols="6" class="container">
    <a :href="to">
      <h4>{{ text }}</h4>
      <div class="image" v-bind:style="style" :alt="altText" />
    </a>
  </b-col>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    altText() {
      return `${this.image} plaatje`
    },
    style() {
      return {
        'background-image': `url('${this.image}')`,
        'background-size': 'cover',
        border: `20px solid ${this.color}`,
        height: '40vh',
        width: '40vh',
        'border-radius': '50%',
      }
    },
  },
}
</script>

<style scoped>
.container {
  text-align: center;
}
</style>
