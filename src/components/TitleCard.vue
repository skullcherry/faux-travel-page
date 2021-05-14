<template>
  <v-card color="rgb(0, 0, 0, 0)" flat>
    <v-img
      lazy-src="../assets/mifxal-latheef-204486-unsplash.png"
      src="../assets/mifxal-latheef-204486.png"
      class="full"
    >
      <v-row class="card-title">
        <v-card-title>
          <p class="card-title-text">Discover the furthest</p>
        </v-card-title>
        <v-card-text>
          <div class="card-subtitle">
            Wafer dessert danish. Powder toffee cookie jelly beans bear claw
            jelly-o gingerbrad halvah. and
          </div>
        </v-card-text>

        <v-item-group class="btn-group">
          <v-item>
            <v-btn color="#cb0202" fab small dark>
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </v-item>

          <v-item>
            <v-btn class="btn-text" x-small text>Watch the video</v-btn>
          </v-item>
        </v-item-group>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "TitleCard",
};
</script>

<style lang="scss" scoped>
.full {
  height: 800px;
}
.card-title {
  position: absolute;
  left: 50%;
  top: 250px;
  transform: translate(-50%, 0);
  max-width: 600px;
}
.card-title-text {
  color: #ffffff;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
  font-family: acumin-pro, sans-serif;
  font-weight: bold;
  letter-spacing: -5px;
}
.card-subtitle {
  color: #ffffff;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  font-family: "Open Sans", sans-serif;
  width: 400px;
  height: 74px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.btn-group {
  padding-top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
}
.btn-text {
  color: #ffffff;
  line-height: 24px;
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  letter-spacing: 25;
  margin-right: 40px;
  text-transform: none !important;
}
</style>
