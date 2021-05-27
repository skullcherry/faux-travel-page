<template>
  <div class="slideshow-container">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <!-- <img :src="currentImg" /> -->
        <v-img
          lazy-src="../assets/damien-checoury-749044-unsplash.png"
          src="../assets/damien-checoury-749044.png"
          class="full-card"
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
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 5000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
.slideshow-container {
  height: 580px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
/* 
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
} */

/* .prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
} */

.full-card {
  height: 600px;
  width: 100vw;
  position: absolute;
}
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
