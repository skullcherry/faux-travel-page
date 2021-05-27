<template>
  <v-app class="home">
    <AppBar />

    <!-- title card -->
    <v-container fluid>
      <v-row>
        <TitleCard />
      </v-row>
    </v-container>

    <!-- <v-container>
      <v-row>
        <Six />
      </v-row>
    </v-container> -->

    <!-- <v-container>
      <v-row>
        <Eight />
      </v-row>
    </v-container> -->

    <!-- two cards -->
    <v-container>
      <v-row class="align-center">
        <v-col cols="6" class="first-blurb">
          <div>
            <h2 class="example-title example-title--first">
              Hand picked tours for you.
            </h2>
            <p class="example-subtitle--first">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
              mollis, ante nec euismod porta, dolor massa venenatis sem.
            </p>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="5" class="ex-card1"> <ExampleCard1 /> </v-col>
      </v-row>

      <v-row class="align-center">
        <v-col cols="5" class="ex-card2"> <ExampleCard2 /></v-col>
        <v-col cols="7" class="second-blurb">
          <div>
            <h2 class="example-title example-title--second">
              Choose what suits you the most.
            </h2>
            <p class="example-subtitle--second">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
              mollis, ante nec euismod porta, dolor massa venenatis sem.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- second title card -->
    <!-- <v-container fluid>
      <v-row>
        <SecondTitleCard />
      </v-row>
    </v-container> -->
    <v-container id="below-the-fold" v-intersect="showMoreContent">
      <v-row>
        <Seven />
      </v-row>
    </v-container>

    <!-- the other two -->
    <v-container>
      <v-row class="align-center">
        <v-col>
          <div class="third-blurb">
            <h2 class="example-title example-title--third">
              We did the hardwork, you just be picky
            </h2>
            <p class="example-subtitle--first">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
              mollis, ante nec euismod porta, dolor massa venenatis sem.
            </p>
          </div>
        </v-col>
        <v-col> <ExampleCard3 /> </v-col>
      </v-row>

      <v-row class="align-center">
        <v-col cols="5" class="ex-card2"> <ExampleCard4 /></v-col>
        <v-col cols="7">
          <div>
            <h2 class="example-title example-title--second">
              Choose what suits you the most.
            </h2>
            <p class="example-subtitle--second">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fermentum nunc tristique, cursus lorem quis, finibus dolor. Cras
              mollis, ante nec euismod porta, dolor massa venenatis sem.
            </p>
            <v-btn text color="#cb0202" dark class="learn-more-btn"
              >Learn more</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- table -->
    <div style="background-color: #fcfcfc">
      <v-container class="vertical-line">
        <div>
          <div class="dot"></div>
          <EmployeesTable :employees="employees" class="table" />
        </div>

        <v-row>
          <v-col>
            <p class="closing-line">We go around the world.</p>
          </v-col>
          <v-col>
            <p class="flight-announcement">You are just 3 hours away from</p>
            <p class="flight-announcement-destination">Maldives</p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <Footer />
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar";
import employeesData from "../data/employees.json";
import TitleCard from "../components/TitleCard";
import ExampleCard1 from "../components/ExampleCard1";
import ExampleCard2 from "../components/ExampleCard2";
// import SecondTitleCard from "../components/SecondTitleCard";
import ExampleCard3 from "../components/ExampleCard3";
import ExampleCard4 from "../components/ExampleCard4";
import EmployeesTable from "../components/EmployeesTable";
import Footer from "../components/Footer";
// import Six from "../components/Six.vue";
import Seven from "../components/Seven.vue";
// import Eight from "../components/Eight.vue";

export default {
  name: "Home",
  components: {
    AppBar,
    TitleCard,
    ExampleCard1,
    ExampleCard2,
    // SecondTitleCard,
    ExampleCard3,
    ExampleCard4,
    EmployeesTable,
    Footer,
    // Six,
    Seven,
    // Eight,
  },
  data() {
    return {
      employees: employeesData,
      loadNewContent: false,
      headline:
        "Here You Learn Everything about building Progressive Vue Apps!",
      sections: [
        { headline: "What does a Service Worker do?" },
        {
          headline: "How does a Service Worker exactly work?",
        },
      ],
      cards: [
        {
          headline: "Makes App available Offline",
          text:
            "By using the CachingAPI all static elements on an app can be pre-cached",
          imgName: "../assets/damien-checoury-749044.png",
        },
        {
          headline: "Use background sync to defer actions",
          text:
            "User inputs entered when offline are sent in the background once they get connectivity.",
          imgName: "../assets/damien-checoury-749044.png",
        },
        {
          headline: "Send Push Notifications",
          text:
            "The Notifications API lets us send push notifications to re-engage users.",
          imgName: "../assets/damien-checoury-749044.png",
        },
      ],
    };
  },
  methods: {
    showMoreContent(entries) {
      this.loadNewContent = entries[0].isIntersecting;
    },
  },
};
</script>

<style scoped>
.first-blurb {
  padding-left: 130px;
}
.ex-card1 {
  padding-right: 80px;
}
.ex-card2 {
  padding-left: 130px;
}
.third-blurb {
  padding-left: 100px;
}

.learn-more-btn {
  line-height: 24px;
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
  margin-right: 40px;
  text-transform: none !important;
  width: 150px;
  height: 34px;
}
.table {
  margin-left: 35px;
}
.closing-line {
  color: #231f20;
  font-size: 42px;
  font-weight: bold;
  margin-top: 120px;
  margin-left: 35px;
  margin-bottom: 100px;
}
.flight-announcement {
  text-align: right;
  color: #bebebe;
  margin-top: 148px;
}
.flight-announcement-destination {
  text-align: right;
  color: #231f20;
  margin-top: -10px;
}
.vertical-line {
  border-left: 2px solid;
  margin-top: 75px;
  height: 560px;
  position: relative;
  border-image: linear-gradient(to bottom, #bebebe40, #bebebe, #bebebe40) 1;
}
.dot {
  height: 4px;
  width: 4px;
  background-color: #cb0202;
  border-radius: 50%;
  position: absolute;
  margin-left: -15px;
  margin-top: 20px;
}
</style>
