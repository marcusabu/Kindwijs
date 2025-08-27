<template>
  <Container>
    <h2>Werkwijze</h2>
    <b-row>
      <b-col md="4">
        <img
          src="~assets/werkwijze2.webp"
          alt="Kindercoaching sessie - kind en coach werken samen aan oplossingen"
          style="max-height: 270px"
        />
      </b-col>
      <b-col md="8">
        <p>
          Kindwijs kindercoaching maakt gebruik van oplossingsgerichte coaching.
          Hierbij wordt het probleem niet teveel belicht door het probleem te
          analyseren maar wordt er samen met het kind en de ouders gezocht naar
          oplossingen die wel werken. Het probleem doet zich namelijk nooit
          altijd en in alle situaties voor. We gebruiken de wijsheid van het
          kind, waardoor het zelfvertrouwen vergroot.
        </p>
        <p>
          Wanneer een kind moeite heeft met de sensorische informatieverwerking
          wordt in kaart gebracht waar het kind moeite mee heeft door gebruik te
          maken van een vragenlijst zodat de aanpak afgestemd kan worden op wat
          het kind nodig heeft.
        </p>
        <p>Werkwijze JaMaRa rekenbegeleidin</p>
        <p>
          De eerste sessie is een onderzoeks-sessie. Er wordt gekeken welke
          onderdelen de leerproblemen in de weg zitten. Na het bespreken van de
          testjes wordt een behandelingsplan opgesteld.
        </p>
        <p>
          Bij JAMARA is het de bedoeling dat uw kind 1 a 2 keer begeleiding
          krijgt en oefent. Er wordt gekeken of er een volgende stap gezet kan
          worden. Van ouders wordt verwacht dat zij iedere dag 5 tot 10 minuten
          de geleerde stappen oefenen met het kind.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8">
        <h3>Werkvormen</h3>
        <p>
          Meerdere wegen leiden naar Rome en dus maakt Kindwijs coaching
          gebruikt van verschillende werkvormen om naar een oplossing te werken.
        </p>
        <p>
          We spelen spelletjes (Schatgravers, Coacheespel,
          <a target="_blank" href="http://degeitenzijnvriendjes.nl"
            >De geit en zijn vriendjes</a
          >), tekenen en knutselen. Technieken die ook gebruikt worden zijn
          meditatie, sandplay en
          <a target="_blank" href="https://www.tekenjegesprek.nl/uitleg"
            >het tekenen van een gesprek</a
          >.
        </p>
        <p>
          Kindwijs kindercoaching maakt gebruik van
          <a
            target="_blank"
            href="https://www.mindacademy.nl/nlp/vooronderstellingen-van-nlp"
            >de NLP gedachte</a
          >. Deze gaat er van uit dat ieder gedrag een positieve intentie heeft.
        </p>
      </b-col>
      <b-col md="4">
        <img
          class="werkwijze-foto"
          src="~assets/werkvormen.webp"
          alt="Creatieve werkvormen: speltherapie, tekenen, knutselen en sandplay voor kindercoaching"
          style="max-height: 300px"
        />
      </b-col>
    </b-row>
    <h3>Verloop</h3>
    <div class="text-image">
      <div m>
        <ul class="timeline">
          <li>
            <div class="timeline-badge info">
              <i class="fas fa-phone" aria-hidden="true"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-body">
                <p>
                  We starten altijd met een telefonische intake. Deze is
                  vrijblijvend en gratis. U geeft hierbij informatie over uw
                  kind en geeft aan wat u en/of uw kind als probleem ervaart.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-badge info">
              <i class="fas fa-comments" aria-hidden="true"></i>
            </div>
            <div class="timeline-panel">
              <p>
                De volgende stap is een kennismaking met elkaar en hiermee
                starten we meteen de coaching. We kijken kort naar het probleem,
                maar bekijken vooral wat er wel goed gaat en wanneer dat zo is.
                Dit gesprek vindt bij voorkeur plaats met beide ouders. Soms is
                1 sessie al verhelderend en voldoende voor ouders om zelf mee
                verder te gaan
              </p>
            </div>
          </li>
          <li>
            <div class="timeline-badge info">
              <i class="fas fa-dice" aria-hidden="true"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-body">
                <p>
                  Meestal volgen er daarna enkele sessies met uw kind waarin
                  bepaalde tools gebruikt worden om vaardigheden te versterken
                  die nodig zijn om te zorgen dat het probleem zich niet meer
                  voordoet. Tijdens iedere sessie wordt gekeken wat we samen
                  gedaan hebben en wat daarmee geleerd is.
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-badge info">
              <i class="far fa-laugh" aria-hidden="true"></i>
            </div>
            <div class="timeline-panel">
              <div class="timeline-body">
                <p>
                  We sluiten het traject af met een eind-evaluatie. U krijgt als
                  ouder handvatten mee waarmee u zelf verder kunt.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Werkwijze',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Ontdek de werkwijze van Kindwijs: oplossingsgerichte coaching, JaMaRa rekenmethodiek, speltherapie, sandplay en creatieve technieken voor kinderen in Rotterdam.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'JaMaRa rekenmethodiek, oplossingsgerichte coaching, speltherapie, sandplay, NLP kinderen, creatieve coaching, werkwijze kindercoaching',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Werkwijze | JaMaRa Rekenmethodiek & Oplossingsgerichte Coaching | Kindwijs',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Unieke combinatie van oplossingsgerichte coaching, JaMaRa rekenmethodiek en creatieve technieken voor optimale resultaten.',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://kindwijs.nl/werkwijze' }],
    }
  },
}
</script>

<style scoped>
.row {
  display: flex;
  padding-bottom: 5em;
}

h3 {
  padding-top: 0 !important;
}
</style>
