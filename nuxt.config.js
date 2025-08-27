export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Kindwijs Kindercoaching',
    titleTemplate: '%s | Kindwijs Kindercoaching',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Kindwijs kindercoaching in Rotterdam en Rockanje. Professionele begeleiding voor kinderen 5-16 jaar bij angsten, gedragsproblemen, leermoeilijkheden en emotionele uitdagingen. Marie-Louise Rosier, gecertificeerd kindercoach.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'kindercoaching, Rotterdam, Rockanje, Hoogvliet, kindertherapeut, gedragsproblemen kinderen, angsten kinderen, JaMara rekenmethodiek, Marie-Louise Rosier, kindercoach, speltherapie, matrix methode',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'index, follow' },
      {
        name: 'author',
        content: 'Marie-Louise Rosier - Kindwijs Kindercoaching',
      },
      { name: 'geo.region', content: 'NL-ZH' },
      { name: 'geo.placename', content: 'Rotterdam, Netherlands' },
      { name: 'geo.position', content: '51.9244;4.4777' },
      { name: 'ICBM', content: '51.9244, 4.4777' },
      // Open Graph
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Kindwijs Kindercoaching | Professional Child Coaching in Rotterdam',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Professionele kindercoaching in Rotterdam en Rockanje. Begeleiding voor kinderen 5-16 jaar bij angsten, gedragsproblemen en leermoeilijkheden.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://kindwijs.nl/logo.webp',
      },
      { hid: 'og:url', property: 'og:url', content: 'https://kindwijs.nl' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Kindwijs Kindercoaching',
      },
      { hid: 'og:locale', property: 'og:locale', content: 'nl_NL' },
      // Twitter Card
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content:
          'Kindwijs Kindercoaching | Professional Child Coaching in Rotterdam',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Professionele kindercoaching in Rotterdam en Rockanje. Begeleiding voor kinderen 5-16 jaar bij angsten, gedragsproblemen en leermoeilijkheden.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://kindwijs.nl/logo.webp',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://kindwijs.nl' },
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Kindwijs Kindercoaching',
          description:
            'Professionele kindercoaching en begeleiding voor kinderen van 5 tot 16 jaar in Rotterdam en Rockanje.',
          url: 'https://kindwijs.nl',
          telephone: '06-38196507',
          email: 'mlrosier@hotmail.com',
          founder: {
            '@type': 'Person',
            name: 'Marie-Louise Rosier',
            jobTitle: 'Gecertificeerd Kindercoach',
          },
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
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '51.9244',
            longitude: '4.4777',
          },
          serviceArea: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: '51.9244',
              longitude: '4.4777',
            },
            geoRadius: '25000',
          },
          priceRange: '€50-€70',
          paymentAccepted: 'Cash, Bank Transfer',
          currenciesAccepted: 'EUR',
          openingHours: 'Mo-Fr 09:00-17:00',
          sameAs: [],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Kindercoaching Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Kindercoaching Sessie',
                  description:
                    'Professionele coaching voor kinderen met gedragsproblemen, angsten of emotionele uitdagingen',
                },
                price: '70',
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Intake Gesprek',
                  description:
                    'Initieel consult om de behoeften van het kind te evalueren',
                },
                price: '65',
                priceCurrency: 'EUR',
              },
            ],
          },
        },
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/kirsten.css',
    '~/assets/css/styles.css',
    '~/assets/css/timeline.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  googleAnalytics: {
    id: 'UA-76519903-5',
  },

  sitemap: {
    hostname: 'https://kindwijs.nl',
    gzip: true,
    routes: [
      '/',
      '/contact',
      '/onderwijs',
      '/over-mij',
      '/tarieven',
      '/wanneer',
      '/werkwijze',
    ],
  },
}
