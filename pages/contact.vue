<template>
  <Container>
    <h2 class="header display-5">Contact</h2>
    <div class="row">
      <div class="col-md-6">
        <p>
          <b>Adres</b> <br />
          Lijster 17 <br />
          3191DM Hoogvliet Rotterdam <br />
          <br />
          Weyerland 25 <br />
          3235RD Rockanje
        </p>
        <p>
          <b>Contactgegevens</b> <br />
          Mail: mlrosier@hotmail.com <br />
          Telefoon: 0638196507
        </p>
      </div>
    </div>
  </Container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Neem contact op met Kindwijs Kindercoaching. Praktijken in Rotterdam (Hoogvliet) en Rockanje. Tel: 06-38196507, Email: mlrosier@hotmail.com. Gratis telefonische kennismaking.',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'contact kindercoaching, Rotterdam kindercoach, Rockanje kindertherapeut, afspraak kindercoaching, Marie-Louise Rosier contact',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contact | Kindwijs Kindercoaching Rotterdam',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Neem contact op met Kindwijs Kindercoaching. Praktijken in Rotterdam en Rockanje. Gratis telefonische kennismaking.',
        },
      ],
      link: [{ rel: 'canonical', href: 'https://kindwijs.nl/contact' }],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'LocalBusiness',
              name: 'Kindwijs Kindercoaching',
              telephone: '06-38196507',
              email: 'mlrosier@hotmail.com',
              address: [
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Lijster 17',
                  addressLocality: 'Hoogvliet Rotterdam',
                  postalCode: '3191DM',
                  addressCountry: 'NL',
                },
                {
                  '@type': 'PostalAddress',
                  streetAddress: 'Weyerland 25',
                  addressLocality: 'Rockanje',
                  postalCode: '3235RD',
                  addressCountry: 'NL',
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
