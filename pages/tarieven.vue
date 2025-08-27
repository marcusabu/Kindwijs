<template>
  <Container>
    <h2 class="header display-5">Tarieven</h2>
    <p>De kennismaking vindt meestal telefonisch plaats en is gratis.</p>
    <p>Gemiddeld duurt de begeleiding van uw kind een uur.</p>
    <p>Soms is er meer of juist minder tijd nodig.</p>
    <div class="card">
      <div class="card-body">
        <b>Tarieven kindercoaching en therapie</b>
        <div class="row">
          <div class="col-7">Intake gesprek</div>
          <div class="col-5">€ 65 per gesprek</div>
        </div>
        <div class="row">
          <div class="col-7">Evaluatiegesprek</div>
          <div class="col-5">€ 50 per gesprek</div>
        </div>
        <div class="row">
          <div class="col-7">Kindercoaching sessie</div>
          <div class="col-5">€ 70 per uur</div>
        </div>
        <br />
        <b>Tarieven oudercoaching</b>
        <div class="row">
          <div class="col-7">Coachinggesprek ouders</div>
          <div class="col-5">€ 55 per sessie</div>
        </div>
        <br />
        <small
          ><i
            >ALLE BOVENGENOEMDE GESPREKKEN/SESSIES DUREN 60 MINUTEN, TENZIJ
            ANDERS OVEREENGEKOMEN.</i
          ></small
        >
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <b> Betaling en afmelding </b>
            <p>
              Bent u verhinderd dan verzoek ik u vriendelijk 24 uur van te voren
              af te melden zodat de gereserveerde tijd aan een ander besteed kan
              worden. Mocht u niet op tijd afmelden of bent u de afspraak
              vergeten, dan moet ik helaas een uurtarief in rekening brengen.
            </p>
          </div>
          <div class="col-md-6">
            <b>Vergoeding</b>
            <p>
              Coachingskosten worden niet vergoed door de zorgverzekeraar. Wel
              kunt u de kosten af trekken als bijzondere ziektekosten bij de
              belastingaangifte.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Tarieven',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Tarieven Kindwijs Kindercoaching: Kindercoaching €70/uur, Intake €65, Oudercoaching €55. Gratis telefonische kennismaking. Aftrekbaar als zorgkosten bij belasting.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'kindercoaching tarieven, kosten kindertherapeut, prijzen kindercoaching Rotterdam, zorgkosten aftrekken',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Tarieven | Kindwijs Kindercoaching Rotterdam',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Transparante tarieven voor kindercoaching. Kindercoaching €70/uur, gratis telefonische kennismaking.',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://kindwijs.nl/tarieven' }],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Kindwijs Kindercoaching Services',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Kindwijs Kindercoaching',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Kindercoaching Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Kindercoaching Sessie',
                    description: '60 minuten professionele kindercoaching',
                  },
                  price: '70.00',
                  priceCurrency: 'EUR',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Intake Gesprek',
                    description: '60 minuten intake en evaluatie',
                  },
                  price: '65.00',
                  priceCurrency: 'EUR',
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Oudercoaching',
                    description: '60 minuten coaching voor ouders',
                  },
                  price: '55.00',
                  priceCurrency: 'EUR',
                },
              ],
            },
          },
        },
      ],
    }
  },
}
</script>

<style scoped>
.card {
  margin-bottom: 2em;
}
</style>
