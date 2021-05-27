<template>
  <img :src="slide.image" />
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    slide: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.slide {
  display: inline-block;
}
</style>
