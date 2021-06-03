<template>
  <v-card color="rgb(0, 0, 0, 0)" flat tile>
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

        <VideoPopup />
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
import VideoPopup from "./VideoPopup.vue";

export default {
  name: "TitleCard",
  components: {
    VideoPopup,
  },
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
</style>
