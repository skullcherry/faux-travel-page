<template>
  <v-app-bar app class="mt-4" color="transparent" flat dark fixed>
    <v-toolbar-title to="/" cols="2">Stellar</v-toolbar-title>
    <v-col cols="8">
      <v-btn
        v-for="link in top_links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
        x-small
        class="mx-auto"
        width="130px"
        color="grey"
      >
        {{ link.label }}
      </v-btn>
    </v-col>

    <v-col cols="2">
      <v-btn text rounded to="/login" x-small class="mx-auto" width="100px">
        Login
      </v-btn>
      <v-btn text rounded to="/register" x-small class="mx-auto" width="100px">
        Register
      </v-btn>
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

<style lang="scss" scoped></style>
