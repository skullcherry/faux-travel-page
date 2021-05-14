<template>
  <v-card class="mx-auto my-12 full" flat>
    <v-img
      lazy-src="../assets/nathan-dumlao-573082-unsplash.png"
      src="../assets/nathan-dumlao-573082.png"
      class="image"
    ></v-img>

    <v-card-text class="text">
      <v-row class="mx-0">
        <v-col cols="8">
          <div class="card-title">Blue River</div>
          <div class="card-subtitle">North Lake, Iceland</div>
          <div class="card-subtitle">Add to fav</div>
        </v-col>

        <v-col align="right">
          <div class="card-title">$329</div>
          <div class="card-subtitle">As low as</div>
          <v-icon color="black">mdi-heart-outline</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ExampleCard1",
};
</script>

<style lang="scss" scoped>
.full {
  height: 324px;
  width: 211px;
  border-radius: 5%;
}
.image {
  height: 211px;
  width: 211px;
  box-shadow: 0 2.8px 2.2px rgba(190, 190, 190, 0.034),
    0 6.7px 5.3px rgba(190, 190, 190, 0.048),
    0 12.5px 10px rgba(190, 190, 190, 0.06),
    0 22.3px 17.9px rgba(190, 190, 190, 0.072),
    0 40px 33.4px rgba(190, 190, 190, 0.086) !important;
  margin-bottom: 38px;
  border-radius: 5%;
}
.text {
  padding: 0px;
}
.card-title {
  font-family: "Open Sans", sans-serif;
  color: black;
  font-size: 12px;
  line-height: 34px;
  font-weight: bold;
}
.card-subtitle {
  font-family: "Open Sans", sans-serif;
  color: #bebebe;
  font-size: 10px;
  line-height: 24px;
}
</style>
