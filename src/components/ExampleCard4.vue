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
          <div class="black--text subtitle-1">Ban Thai</div>
          <div class="grey--text caption">Silom Soi 1, Bangkok</div>
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

<style lang="scss" scoped></style>
