<template>
  <v-card class="mx-auto my-12" max-width="300" flat>
    <v-img
      height="300"
      lazy-src="../assets/magnus-lindvall-4407-unsplash.png"
      src="../assets/magnus-lindvall-4407-unsplash@2x.png"
    ></v-img>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-col cols="8">
          <div class="black--text subtitle-1">Great Reefs</div>
          <div class="grey--text caption">North Lake, Iceland</div>
          <div class="grey--text caption">Add to fav</div>
        </v-col>

        <v-col align="right">
          <div class="black--text subtitle-1">$169</div>
          <div class="grey--text caption">As low as</div>
          <v-icon>mdi-heart-outline</v-icon>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ExampleCard",
};
</script>

<style lang="scss" scoped></style>
