<template>
  <v-app>
    <AppBar />
    <v-container fluid>
      <v-row>
        <v-img
          lazy-src="./assets/mifxal-latheef-204486-unsplash.png"
          src="./assets/mifxal-latheef-204486-unsplash@2x.png"
        >
          <!-- title card -->
          <v-row>
            <v-col align="center">
              <TitleCard />
            </v-col>
          </v-row>
        </v-img>
      </v-row>

      <!-- two cards -->
      <v-row class="d-flex align-center">
        <v-spacer></v-spacer>
        <v-col>
          <h1>Hand picked tours for you.</h1>
          <p class="subtitle-1 grey--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
            mollis, ante nec euismod porta, dolor massa venenatis sem.
          </p>
        </v-col>
        <v-col> <ExampleCard1 /> </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <v-row class="d-flex align-center">
        <v-spacer></v-spacer>
        <v-col> <ExampleCard1 /></v-col>
        <v-col>
          <v-card flat tile>
            <h2>Choose what suits you the most.</h2>
            <p class="subtitle-1 grey--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
              mollis, ante nec euismod porta, dolor massa venenatis sem.
            </p>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>

      <v-row>
        <SecondTitleCard />
      </v-row>

      <!-- the other two -->
      <v-row class="d-flex align-center">
        <v-col cols="8">
          <v-card class="mx-auto" flat tile width="400">
            <h1>We did the hard work, you just be picky.</h1>
            <p class="subtitle-1 grey--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
              mollis, ante nec euismod porta, dolor massa venenatis sem.
            </p>
          </v-card>
        </v-col>
        <v-col cols="4">
          <ExampleCard2 />
        </v-col>
      </v-row>

      <v-row class="d-flex align-center">
        <v-col cols="4">
          <ExampleCard2 />
        </v-col>
        <v-col cols="8">
          <v-card class="mx-auto" flat tile width="400">
            <h2>Choose what suits you the most.</h2>
            <p class="subtitle-1 grey--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
              mollis, ante nec euismod porta, dolor massa venenatis sem.
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- table -->
      <v-row class="pa-10">
        <v-timeline dense align-top>
          <v-timeline-item fill-dot color="red" small>
            <v-col cols="10" class="mx-auto">
              <EmployeesTable :employees="employees" />
            </v-col>
          </v-timeline-item>

          <v-timeline-item hide-dot>
            <h1>We go around the world</h1>
          </v-timeline-item>
        </v-timeline>
      </v-row>

      <v-footer color="grey lighten-3" padless dense>
        <v-spacer cols="1"></v-spacer>

        <v-col cols="7">
          <v-btn
            v-for="link in bottom_links"
            :key="`${link.label}-footer-link`"
            color="grey"
            text
            rounded
            class="my-2"
            :to="link.url"
            x-small
          >
            {{ link.label }}
          </v-btn>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="3">
          Next flight: Lufthansa
          <v-icon>mdi-airplane mdi-rotate-90</v-icon>
          {{ currentDateTime() }}
        </v-col>

        <v-spacer cols="1"></v-spacer>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
import EmployeesTable from "./components/EmployeesTable";
import employeesData from "./data/employees.json";
import TitleCard from "./components/TitleCard";
import SecondTitleCard from "./components/SecondTitleCard";
import ExampleCard1 from "./components/ExampleCard1";
import ExampleCard2 from "./components/ExampleCard2";
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    EmployeesTable,
    TitleCard,
    ExampleCard1,
    ExampleCard2,
    AppBar,
    SecondTitleCard,
  },
  data() {
    return {
      employees: employeesData,

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
      const dateTime = date + " " + time;

      return dateTime;
    },
  },
};
</script>

<style scoped></style>
