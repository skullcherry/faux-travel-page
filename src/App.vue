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

<style>
.example-title--first {
  color: #231f20;
  font-size: 42px;
  font-weight: bold;
  max-width: 360px;
  line-height: 42px;
  margin-bottom: 47px;
}
.example-title--second {
  color: #231f20;
  font-size: 24px;
  font-weight: bold;
  max-width: 200px;
  line-height: 32px;
  margin-bottom: 47px;
}
.example-title--third {
  color: #231f20;
  font-size: 42px;
  font-weight: bold;
  max-width: 400px;
  line-height: 42px;
  margin-bottom: 47px;
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
