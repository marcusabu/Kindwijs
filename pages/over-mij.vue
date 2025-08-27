<template>
  <Container>
        <h2>Over mij</h2>
        <b-row>
          <b-col md="8">
            <p>
              Ik ben Marie-Louise Rosier, eigenaar van Kindwijs kindercoaching.
            </p>
            <p>
              In mijn praktijk help ik kinderen het vertrouwen in zichzelf te
              vergroten. Bij dit proces doe ik een beroep op de eigen wijsheid
              van het kind.
            </p>
            <p>
              Zelf heb ik met veel liefde 3 kinderen grootgebracht waarvan de
              jongste nog thuis woont. Omdat ik het spelen met kinderen miste,
              ben ik gastouder geworden van 4 schatten van kinderen. Zij komen
              wekelijks bij mij langs om samen met mij en mijn dochter te
              spelen, bakken, tekenen en knutselen.
            </p>
            </b-col>
            <b-col md="4">

            <img
              class="over-mij-foto"
              src="~assets/selfie.webp"
              alt="Marie-Louise Rosier, gecertificeerd kindercoach en eigenaar van Kindwijs Kindercoaching"
              style="max-height: 300px"
            />
            </b-col>
        </b-row>
            <h3>Werkervaring</h3>
            <p>
              In 1992 startte ik in het onderwijs in een kleutergroep. Gedurende
              de jaren heb ik werk gedaan als remedial teacher en af en toe een
              uitstap gemaakt naar een ander groep. De laatste jaren ben ik
              werkzaam als Intern Begeleider op een school in Rotterdam West.
              Binnen mijn werk als Intern Begeleider begeleid ik ook kinderen
              die gepest worden of zelf pesten en kinderen die vastlopen betreft
              bepaald gedrag.
            </p>
            <h3>Studies</h3>
          </div>
            <p>
              2021 <b>Matrix methode</b> - Matrix methode instituut. De
              MatriXmethode is een oplossing voor onder andere angsten,
              trauma’s, emotionele problemen, onverklaarbare (pijn) klachten,
              moeite met informatie onthouden, vol hoofd, burn-out en stress.
              Met de Matrixmethode worden negatieve belevingen in de hersenen
              geneutraliseerd zonder over het probleem te praten.
            </p>
            <p>
              2020 <b>Spelobservatie en Sandplay </b> - Rinogroep. In een
              tekening, spel en zandspel laat een kind het onbewuste van
              zichzelf zien. Door middel van deze beeldentaal kun je een kind
              begrijpen zonder het gebruik van woorden.
            </p>
            <p></p>
            <p>
              2020 <b> Opleiding Creatief kindercoach</b> - Intence opleidingen.
              Creativiteit sluit aan bij de belevingswereld van kinderen, het
              past bij hun natuurlijke staat van zijn. Kinderen begeleiden van
              hoofd naar hart door middel van tekenen, kleien, schilderen en
              opstellingen.
            </p>
            <p></p>
            <p>2019 <b> Licentie coachee spel</b></p>
            <p>
              2018 <b>Training Speltherapie</b> - Psychodidact. Deze training
              heeft mij extra tools gegeven om kinderen ook op een creatieve
              manier, door middel van spelletjes en prentenboeken te begeleiden.
            </p>
            <p>
              2018 <b>Opleiding Kindercoach</b> - Tea Adema. De opleiding
              kindercoach, pubercoach en opvoedcoach behandelt de belangrijkste
              methodieken uit de ontwikkelingspsychologie, pedagogiek,
              communicatie, oplossingsgericht werken en systemisch/contextueel
              werken.
            </p>
            <p>
              2016 <b>Master SEN Gedragsspecialist</b> - Seminarium voor
              Orthopedagogiek Utrecht. Binnen deze opleiding heb ik heel veel
              kennis opgedaan over verschillende vormen van gedragsproblemen en
              hoe daar op een goede manier mee om te gaan.
            </p>
            <p>
              2016 <b>Psychomotorische remedial teaching</b> - Medilex
              Onderwijs. Het belang van de motorische ontwikkeling op het leren.
            </p>

        <a href="/contact">
          <button
            type="button"
            class="contact-me-btn btn btn-outline-primary btn-lg btn-block"
          >
            Neem contact op
          </button>
        </a>
  </Container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Over Mij | Marie-Louise Rosier',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Marie-Louise Rosier, gecertificeerd kindercoach met 30+ jaar ervaring in onderwijs. Opgeleid in Matrix Methode, Speltherapie, Creatieve Kindercoaching. Praktijken in Rotterdam en Rockanje.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Marie-Louise Rosier, kindercoach Rotterdam, matrix methode, speltherapie, creatieve kindercoaching, SEN gedragsspecialist, ervaren kindertherapeut'
        },
        { hid: 'og:title', property: 'og:title', content: 'Over Mij | Marie-Louise Rosier | Kindwijs Kindercoaching Rotterdam' },
        { hid: 'og:description', property: 'og:description', content: 'Marie-Louise Rosier, gecertificeerd kindercoach met 30+ jaar ervaring. Gespecialiseerd in Matrix Methode, Speltherapie en Creatieve Kindercoaching.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://kindwijs.nl/over-mij' }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'Marie-Louise Rosier',
            'jobTitle': 'Gecertificeerd Kindercoach',
            'description': 'Ervaren kindercoach gespecialiseerd in Matrix Methode, Speltherapie en Creatieve Kindercoaching',
            'worksFor': {
              '@type': 'LocalBusiness',
              'name': 'Kindwijs Kindercoaching'
            },
            'hasCredential': [
              'Master SEN Gedragsspecialist',
              'Opleiding Kindercoach',
              'Matrix Methode Certificering',
              'Training Speltherapie',
              'Opleiding Creatief Kindercoach'
            ],
            'alumniOf': [
              'Seminarium voor Orthopedagogiek Utrecht',
              'Tea Adema Kindercoach Opleiding',
              'Matrix Methode Instituut',
              'Intence Opleidingen'
            ]
          }
        }
      ]
    }
  }
}
</script>
