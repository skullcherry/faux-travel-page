<template>
  <v-app-bar app class="mt-4" color="transparent" flat dark fixed>
    <router-link
      to="/"
      class="site-logo"
      style="text-decoration: none; color: inherit"
    >
      <v-toolbar-title>Stellar</v-toolbar-title>
    </router-link>

    <v-col>
      <v-btn
        v-for="link in top_links.slice(1)"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
        x-small
        class="top-links"
        router
      >
        {{ link.label }}
      </v-btn>
    </v-col>

    <v-col class="text-right pr-13">
      <router-link to="/login" custom v-slot="{ navigate }">
        <v-btn
          @click="navigate"
          @keypress.enter="navigate"
          role="link"
          text
          rounded
          x-small
          class="top-links"
          >Login</v-btn
        >
      </router-link>

      <router-link to="/register" custom v-slot="{ navigate }">
        <v-btn
          @click="navigate"
          @keypress.enter="navigate"
          role="link"
          text
          rounded
          x-small
          class="top-links"
          >Register</v-btn
        >
      </router-link>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      top_links: [
        {
          label: "Home",
          url: "/",
        },
        {
          label: "Plan a trip",
          url: "/plan-a-trip",
        },
        {
          label: "Discover",
          url: "/discover",
        },
        {
          label: "Check flights",
          url: "/check-flights",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.site-logo {
  color: #ffffff;
  line-height: 72px;
  font-size: 22px;
  font-family: acumin-pro, sans-serif;
  font-weight: bold;
  margin-left: 90px;
  margin-right: 90px;
}
.top-links {
  color: #ffffff;
  line-height: 24px;
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
  margin-right: 40px;
  text-transform: none !important;
}
</style>
