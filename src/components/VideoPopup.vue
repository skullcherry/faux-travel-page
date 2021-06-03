<template>
  <v-row>
    <v-dialog v-model="dialog" width="910" height="520">
      <template v-slot:activator="{ on, attrs }">
        <v-item-group class="btn-group">
          <v-item>
            <v-btn color="#cb0202" fab small dark v-bind="attrs" v-on="on">
              <v-icon>mdi-play</v-icon>
            </v-btn>
          </v-item>
          <v-item>
            <v-chip label class="btn-text" color="transparent" dark
              >Watch the video</v-chip
            >
          </v-item>
        </v-item-group>
      </template>

      <v-card color="transparent">
        <youtube
          video-id="E6al4UWbbWs"
          player-width="910"
          player-height="520"
          :player-vars="{ autoplay: 1 }"
          class="headline"
          v-if="dialog"
        ></youtube>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "VideoPopup",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.btn-group {
  padding-top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
}
.btn-text {
  line-height: 24px;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  letter-spacing: 25;
  margin-right: 40px;
  text-transform: none !important;
}
.headline {
  text-align: center;
}
</style>
