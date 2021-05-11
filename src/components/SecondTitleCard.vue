<template>
  <v-card color="rgb(0, 0, 0, 0)" flat>
    <v-img
      lazy-src="../assets/damien-checoury-749044-unsplash.png"
      src="../assets/damien-checoury-749044-unsplash@2x.png"
    >
      <v-row class="card-title">
        <v-card-title>
          <p class="card-title-text">Iceland</p>
        </v-card-title>

        <v-card-text>
          <v-btn fab small>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn fab small class="mx-6">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-text>
      </v-row>

      <v-row>
        <v-col>
          <p class="text-left">
            We curate the best places to stay around the world
          </p>
        </v-col>
        <v-col class="text-right">
          <p>The North Lake</p>
          <p>Iceland</p>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-title {
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 47px;
}
.card-title-text {
  color: #ffffff;
  font-family: acumin-pro, sans-serif;
  font-weight: bold;
  font-size: 72px;
  letter-spacing: -5px;
  line-height: 72px;
}
.text-left {
  color: #ffffff;
  font-family: acumin-pro, sans-serif;
  font-weight: bold;
  font-size: 24px;
  letter-spacing: -1px;
  line-height: 30px;
  position: absolute;
  bottom: 15px;
  left: 47px;
  width: 328px;
}
.text-right {
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 8px;
  position: absolute;
  bottom: 30px;
  right: 43px;
}
</style>
