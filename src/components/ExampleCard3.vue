<template>
  <v-card class="mx-auto my-12 full" flat>
    <v-img
      lazy-src="../assets/chelsea-gates-1419582-unsplash.png"
      src="../assets/chelsea-gates-1419582.png"
      class="image"
    ></v-img>
    <v-card-text>
      <v-row>
        <v-col cols="8">
          <p class="card-title">Ban Thai</p>
          <p class="card-subtitle">Silom Soi 1, Bangkok</p>
        </v-col>
        <v-col cols="4" align="right">
          <v-chip label class="rating-chip" color="#F0F0F0">4.6</v-chip>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="benefits-container">
          <div>
            <v-chip class="included-chip" dark color="black">Included</v-chip>
          </div>
          <p class="benefits">Free Wifi · Swimming Pool</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="price-container">
          <p class="card-subtitle">As low as</p>
          <p class="price">$300</p>
        </v-col>
        <v-col align="right">
          <v-icon color="black" class="heart">mdi-heart-outline</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.full {
  width: 210px;
  height: 330px;
  box-shadow: 0 2.8px 2.2px rgba(190, 190, 190, 0.034),
    0 6.7px 5.3px rgba(190, 190, 190, 0.048),
    0 12.5px 10px rgba(190, 190, 190, 0.06),
    0 22.3px 17.9px rgba(190, 190, 190, 0.072),
    0 41.8px 33.4px rgba(190, 190, 190, 0.086) !important;
}
.image {
  height: 166px;
  width: 210px;
}
.card-title {
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: black;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 12px;
}
.card-subtitle {
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  color: #bebebe;
  margin-top: 0px;
  padding-top: 0px;
  font-size: 10px;
}
.rating-chip {
  // width: 30px;
  // height: 30px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: bold;
}
.benefits-container {
  margin-top: -35px;
}
.included-chip {
  font-size: 8px;
  height: 13px;
  // max-width: 43px;
  line-height: 24px;
  font-family: "Open Sans", sans-serif;
}
.benefits {
  font-size: 10px;
  color: #bebebe;
  font-family: "Open Sans", sans-serif;
}
.price-container {
  margin-top: -35px;
}
.price {
  color: black;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  margin-top: -20px;
}
.heart {
  margin-top: -45px;
}
</style>
