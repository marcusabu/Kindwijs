<template>
  <Container>
    <h2>Welkom bij Kindwijs kindercoaching</h2>
    <p>
      Kindwijs kindercoaching biedt begeleiding aan kinderen die om
      verschillende redenen problemen met zichzelf en/of de omgeving ervaren.
      Ieder kind zit weleens wat minder lekker in z’n vel, dat hoort bij
      opgroeien. Wanneer een kind echter langere tijd verdrietig, angstig of
      boos is, kan dat de ontwikkeling van het kind in de weg gaan zitten. Het
      kan lastig zijn voor het kind of het gezin om het probleem zelf op te
      lossen. Het kind kan dan een duwtje in de rug gebruiken. Kindwijs maakt
      gebruik van de wijsheid en kwaliteiten die het kind in zich heeft en
      gebruikt deze wijsheid om naar een doel te werken en tot een oplossing te
      komen. Deze manier maakt dat het vertrouwen van het kind vergroot wordt.
      Kindwijs kindercoaching maakt gebruik van verschillende werkvormen passend
      bij het kind en bij de hulpvraag. De hulp van ouders kan hierbij niet
      gemist worden.
    </p>
    <p>
      Kindwijskindercoaching biedt ook begeleiding bij het leren door middel van de JaMara rekenmethodiek. Deze methodiek is uniek en geschikt voor kinderen die veel moeite hebben met rekenen en waarbij zij het automatiseren maar niet onder controle lijken te krijgen. Wanneer u en de school al alles geprobeerd lijken te hebben en het rekenen bij uw kind nog steeds niet op gang komt. Jamara activeert het leervermogen door te zien, horen, voelen en bewegen. Er worden zo min mogelijke handelingen verricht en zo min mogelijke talige opdrachten gegeven. Ook wordt veel aandacht besteed aan het trainen van het werkgeheugen. Jamara leert als enige rekenmethodiek het kind de juiste denkstrategie aan om tot automatiseren te kunnen komen.
    </p>
    <h3>Wie en waarom?</h3>
    <p>
      Kinderen tussen 5 en 16 jaar kunnen hier terecht bij het leren van de
      volgende vaardigheden:
      <ul>
        <li>Positieve gedachten hebben</li>
        <li>Het verwerken van angsten en trauma's</li>
        <li>Leer-, concentratie- en automatiseringsproblemen</li>
        <li>Gebrek aan focus/een druk en chaotisch hoofd</li>
        <li>Omgaan met boosheid</li>
        <li>Omgaan en verwerken van verdriet</li>
        <li>Het vergroten van het zelfvertrouwen</li>
        <li>Het omgaan met pesten</li>
        <li>Het verwerken van een scheiding</li>
        <li>Het makkelijker in slaap komen</li>
      </ul>
    </p>
    <h3>Hoe lang?</h3>
    <p>
      Kindercoaching kan bestaan uit één enkele sessies of een aantal sessies.
      Te denken valt aan 4 tot 6 sessies. De begeleiding duurt gemiddeld een
      uur.
    </p>
    <h3>Waar?</h3>
    <p>
      De begeleiding kan plaatsvinden bij mij in de praktijk in Hoogvliet
      Rotterdam, indien gewenst bij u thuis of op de school van uw kind. Dit
      laatste gebeurt wanneer de aanmelding via school verloopt.
    </p>
    <b-row class="image-links">
      <b-col md="6" sm="12">
        <ImageLink 
          text="Wanneer" 
          to="/wanneer" 
          :image="require('../assets/wanneer.webp')" 
          color="#41803c"
        />
      </b-col>
      <b-col md="6" sm="12">
        <ImageLink 
          text="Werkwijze" 
          to="/werkwijze" 
          :image="require('../assets/werkwijze.webp')" 
          color="#f4bb31"
        />
      </b-col>
      <b-col md="6" sm="12">
        <ImageLink 
          text="Over mij" 
          to="/over-mij" 
          :image="require('../assets/over-mij.webp')" 
          color="#CC74A0"
        />
      </b-col>
      <b-col md="6" sm="12">
        <ImageLink 
          text="Contact" 
          to="/contact" 
          :image="require('../assets/contact.webp')" 
          color="#0084ca"
        />
      </b-col>
    </b-row>
  </Container>
</template>

<script>
import ImageLink from '~/components/ImageLink.vue'
export default {
  components: { ImageLink },}
</script>

<style scoped>
.image-links {
  padding-top: 3em;
}
</style>
