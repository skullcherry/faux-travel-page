<template>
  <div>
    <div class="slideshow-container">
      <div
        class="mySlides fade"
        v-for="(card, id) in cards"
        :key="id"
        ref="mySlides"
      >
        <div class="numbertext">{{ card.numbertext }}</div>
        <img :src="card.image" />
        <div class="text">{{ card.caption }}</div>
      </div>

      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <br />

    <div style="text-align: center">
      <span
        class="dot"
        v-for="item in 3"
        @click="currentSlide(item + 1)"
        :key="item"
        ref="dot"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
      cards: [
        {
          image: "https://www.w3schools.com/howto/img_nature_wide.jpg",
          caption: "Caption Text",
          numbertext: "1 / 3",
          id: 1,
        },
        {
          image: "https://www.w3schools.com/howto/img_snow_wide.jpg",
          caption: "Caption Text",
          numbertext: "2 / 3",
          id: 2,
        },
        {
          image: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
          caption: "Caption Text",
          numbertext: "3 / 3",
          id: 3,
        },
      ],
    };
  },
  methods: {
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },

    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      console.log(this.$refs.mySlides);
      let i;
      const { mySlides: slides } = this.$refs;
      const { dot: dots } = this.$refs;
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
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
img {
  vertical-align: middle;
}

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
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
</style>
