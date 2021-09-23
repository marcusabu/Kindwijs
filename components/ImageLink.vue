<template>
  <div>
    <a :href="to">
      <h4>{{ text }}</h4>
      <div class="image" v-bind:style="style" :alt="altText" />
    </a>
  </div>
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
a {
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-bottom: 3em;
}
</style>
