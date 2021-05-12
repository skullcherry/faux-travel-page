<template>
  <v-card class="mx-auto my-12" width="250" flat elevation="8">
    <v-img
      height="230"
      lazy-src="../assets/sebastian-pena-lambarri-1215804-unsplash.png"
      src="../assets/sebastian-pena-lambarri-1215804-unsplash@2x.png"
    ></v-img>
    <v-card-text>
      <v-row>
        <v-col cols="8">
          <p class="card-title">Ban Thai</p>
          <p class="card-subtitle">Silom Soi 1, Bangkok</p>
        </v-col>
        <v-col align="right">
          <v-chip label>4.6</v-chip>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div><v-chip dark x-small color="black">Included</v-chip></div>
          <div class="grey--text caption">Free Wifi·Swimming Pool</div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <div class="grey--text caption">As low as</div>
          <div class="black--text title">$300</div>
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
</style>
