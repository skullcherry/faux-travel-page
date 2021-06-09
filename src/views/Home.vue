<template>
  <v-app class="home">
    <AppBar />

    <!-- title card -->
    <v-container fluid>
      <v-row>
        <TitleCard />
      </v-row>
    </v-container>

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
            <v-btn color="#cb0202" dark class="learn-more-btn"
              >Learn more</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>

    <!-- table -->
    <div style="background-color: #fcfcfc" v-intersect="showMoreContent">
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
import ExampleCard1 from "../components/ExampleCards/ExampleCard1";
import ExampleCard2 from "../components/ExampleCards/ExampleCard2";
// import SecondTitleCard from "../components/SecondTitleCard";
import ExampleCard3 from "../components/ExampleCards/ExampleCard3";
import ExampleCard4 from "../components/ExampleCards/ExampleCard4";
import EmployeesTable from "../components/EmployeesTable";
import Footer from "../components/Footer";
import Seven from "../components/Seven.vue";

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
    Seven,
  },
  data() {
    return {
      employees: employeesData,
      loadNewContent: false,
    };
  },
  methods: {
    showMoreContent(entries) {
      this.loadNewContent = entries[0].isIntersecting;
    },
  },
};
</script>

<style scoped lang="scss">
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

.example-title {
  color: #231f20;
  margin-bottom: 47px;
  font-weight: bold;

  &--first {
    font-size: 42px;
    max-width: 360px;
    line-height: 42px;
  }
  &--second {
    font-size: 24px;
    max-width: 200px;
    line-height: 32px;
  }

  &--third {
    font-size: 42px;
    max-width: 400px;
    line-height: 42px;
  }
}
.example-subtitle {
  color: #999999;
  font-size: 16px;

  &--first {
    max-width: 485px;
  }

  &--second {
    max-width: 410px;
  }
}
</style>
