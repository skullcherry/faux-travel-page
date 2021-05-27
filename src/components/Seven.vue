<template>
  <v-row class="slideshow-container full-card">
    <div
      class="mySlides fade"
      v-for="(slide, id) in slides"
      :key="id"
      ref="mySlides"
    >
      <v-img :src="slide.image" class="full-card">
        <v-row class="card-title">
          <v-card-title>
            <p class="card-title-text">{{ slide.title }}</p>
          </v-card-title>

          <v-card-text>
            <v-btn fab small class="prev" @click="plusSlides(-1)">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn fab small class="mx-6 next" @click="plusSlides(1)">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-text>
        </v-row>

        <v-row>
          <v-col>
            <p class="text-left">
              {{ slide.leftText }}
            </p>
          </v-col>
          <v-col class="text-right">
            <p>{{ slide.rightTextTop }}</p>
            <p>{{ slide.rightTextBottom }}</p>
          </v-col>
        </v-row>
      </v-img>
    </div>
  </v-row>
</template>

<script>
export default {
  name: "Seven",
  data() {
    return {
      slideIndex: 1,
      slides: [
        {
          title: "Iceland",
          image: require(`../assets/damien-checoury1.png`),
          leftText: "We curate the best places to stay around the world",
          rightTextTop: "The North Lake",
          rightTextBottom: "Iceland",
          id: 1,
        },
        {
          title: "Aislănd",
          image: require(`../assets/damien-checoury2.png`),
          leftText: "Noi adunăm cele mai bune locuri de stat în jurul lumii",
          rightTextTop: "Lacul de Nord",
          rightTextBottom: "Aislănd",
          id: 2,
        },
        {
          title: "Ice ice",
          image: require(`../assets/damien-checoury3.png`),
          leftText: "W crate bst place to stay round wrld",
          rightTextTop: "Nrth Lke",
          rightTextBottom: "Ice ice",
          id: 3,
        },
      ],
    };
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    showSlides(n) {
      let i;
      const { mySlides: slides } = this.$refs;
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
    },
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.mySlides {
  display: none;
}

.prev,
.next {
  cursor: pointer;
  transition: 0.6s ease;
  user-select: none;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.full-card {
  height: 600px;
  margin-left: -83px;
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
