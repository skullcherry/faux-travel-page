<template>
  <v-card
    color="rgb(0, 0, 0, 0)"
    flat
    dark
    min-height="100%"
    class="d-flex align-stretch"
  >
    <v-img
      lazy-src="../assets/damien-checoury-749044-unsplash.png"
      src="../assets/damien-checoury-749044-unsplash@2x.png"
    >
      <v-row class="mx-5">
        <v-card-title>
          <h1>Iceland</h1>
        </v-card-title>

        <v-card-text>
          <v-btn fab light small class="mx-6">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-btn fab light small> <v-icon>mdi-arrow-right</v-icon> </v-btn>
        </v-card-text>
      </v-row>

      <v-row class="mx-10">
        <v-col cols="auto" class="mr-auto">
          <p>We curate the best places to stay around the world</p>
        </v-col>
        <v-col cols="auto">
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

<style lang="scss" scoped></style>
