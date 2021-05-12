<template>
  <v-card class="mx-auto my-12" width="210" height="330" flat elevation="5">
    <v-img
      lazy-src="../assets/chelsea-gates-1419582-unsplash.png"
      src="../assets/chelsea-gates-1419582-unsplash@2x.png"
    ></v-img>
    <v-card-text>
      <v-row>
        <v-col cols="10">
          <p class="card-title">Ban Thai</p>
          <p class="card-subtitle">Silom Soi 1, Bangkok</p>
        </v-col>
        <v-col align="right" cols="2">
          <v-chip label>4.6</v-chip>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="benefits-container">
          <div><v-chip dark x-small color="black">Included</v-chip></div>
          <p class="benefits">Free Wifi · Swimming Pool</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p class="benefits">As low as</p>
          <p class="price">$300</p>
        </v-col>
        <v-col align="right">
          <v-icon>mdi-heart-outline</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-title {
  font-weight: bold;
  font-family: "Open Sans", sans-serif;
  color: black;
  margin-bottom: 0px;
  padding-bottom: 0px;
}
.card-subtitle {
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  color: #bebebe;
  margin-top: 0px;
  padding-top: 0px;
}
.benefits-container {
  margin-top: -55px;
}
.benefits {
  font-size: 10px;
  color: #bebebe;
}
.price {
  color: black;
  font-size: 20px;
}
</style>
