<template>
  <div id="App">
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss">
$color1: #231f20;
$color2: #999999;
$color3: black;
$color4: #bebebe;
$color5: white;
$color6: #cb0202;

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap");
@import url("https://use.typekit.net/hxm7brb.css");

.example-title {
  color: #231f20;
  margin-bottom: 47px;
  font-weight: bold;

  &--first {
    font-size: 42px;
    max-width: 360px;
    line-height: 42px;
  }
  &--second {
    font-size: 24px;
    max-width: 200px;
    line-height: 32px;
  }

  &--third {
    font-size: 42px;
    max-width: 400px;
    line-height: 42px;
  }
}
.example-subtitle--first {
  color: #999999;
  font-size: 16px;
  max-width: 485px;
}
.example-subtitle--second {
  color: #999999;
  font-size: 16px;
  max-width: 410px;
}
</style>
