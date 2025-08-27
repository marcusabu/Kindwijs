<template>
  <div>
    <a :href="to">
      <h4>{{ text }}</h4>
      <div class="image" :style="style" role="img" :aria-label="altText" />
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
      const descriptions = {
        'Wanneer': 'Informatie over wanneer kindercoaching nodig is - hulp bij emotionele problemen en gedragsuitdagingen',
        'Werkwijze': 'Ontdek de werkwijze van Kindwijs - oplossingsgerichte coaching en creatieve technieken',
        'Over mij': 'Lees meer over Marie-Louise Rosier - gecertificeerd kindercoach met jarenlange ervaring',
        'Contact': 'Contactinformatie en praktijklocaties Rotterdam en Rockanje - neem contact op'
      }
      return descriptions[this.text] || `Navigatie naar ${this.text} pagina`
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
