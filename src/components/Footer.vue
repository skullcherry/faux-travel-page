<template>
  <v-footer color="grey lighten-3" padless dense>
    <v-col class="nav-links-container">
      <v-btn
        v-for="link in bottom_links"
        :key="`${link.label}-footer-link`"
        text
        rounded
        class="nav-links"
        :to="link.url"
        x-small
      >
        {{ link.label }}
      </v-btn>
    </v-col>

    <v-spacer></v-spacer>

    <v-col>
      <v-icon class="static">mdi-airplane mdi-rotate-90</v-icon>
      <label class="static"> Next flight:</label>
      <label class="next-flight"> Lufthansa</label>
      <label class="static"> {{ currentDateTime() }}</label>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      bottom_links: [
        {
          label: "Price",
          url: "/price",
        },
        {
          label: "Distance",
          url: "/distance",
        },
        {
          label: "Country",
          url: "/country",
        },
      ],
    };
  },
  methods: {
    currentDateTime() {
      const current = new Date();
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var n = months[current.getMonth()];
      const date = current.getDate() + ", " + n;
      const time = current.getHours() + ":" + current.getMinutes();
      const dateTime = date + "   " + time;

      return dateTime;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-links-container {
  margin-left: 130px;
}
.nav-links {
  color: #bebebe;
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  margin-left: 45px;
  text-transform: none !important;
}
.next-flight {
  color: #bebebe;
  padding-right: 15px;
}
.static {
  color: black;
  padding-right: 20px;
}
</style>
