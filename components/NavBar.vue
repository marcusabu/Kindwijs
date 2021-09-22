<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Kindwijs home</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/wanneer" :class="setActive('wanneer')">
            Wanneer een kindercoach
          </b-nav-item>
          <b-nav-item href="/werkwijze" :class="setActive('werkwijze')"
            >Werkwijze
          </b-nav-item>
          <b-nav-item href="/onderwijs" :class="setActive('onderwijs')"
            >Onderwijs
          </b-nav-item>
          <b-nav-item href="/over-mij" :class="setActive('over-mij')"
            >Over mij
          </b-nav-item>
          <b-nav-item href="/tarieven" :class="setActive('tarieven')"
            >Tarieven
          </b-nav-item>
          <b-nav-item href="/contact" :class="setActive('contact')"
            >Contact
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item
            href="https://www.facebook.com/Kindwijs-Kindercoaching-101080354697170/"
            target="_blank"
            ><BIconFacebook
          /></b-nav-item>
          <b-nav-item
            href="https://www.linkedin.com/in/marie-louise-rosier-75a05042/"
            target="_blank"
            ><BIconLinkedin
          /></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BIconFacebook, BIconLinkedin } from 'bootstrap-vue'
export default {
  components: {
    BIconFacebook,
    BIconLinkedin,
  },
  methods: {
    setActive(routeName) {
      return routeName === this.$route.name ? 'active' : ''
    },
  },
}
</script>

<style scoped>
.navbar {
  background-color: #f4bb31 !important;
}

.nav-link {
  color: white !important;
}

.active {
  border-bottom: 3px solid white;
}
</style>
