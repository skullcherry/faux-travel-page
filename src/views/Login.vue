<template>
  <v-container fluid class="background">
    <AppBar />
    <v-img src="@/assets/mifxal-latheef-204486.png" class="image">
      <div class="lorem">
        <v-card class="fff">
          <v-form ref="signUpForm" v-model="formValidity">
            <v-text-field
              label="Email"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-checkbox
              label="Agree to terms and conditions"
              v-model="agreeToTerms"
              :rules="agreeToTermsRules"
              required
            ></v-checkbox>
            <v-btn class="" type="submit" :disabled="!formValidity"
              >Submit</v-btn
            >
          </v-form>
        </v-card>
      </div>
    </v-img>
  </v-container>
</template>

<script>
import AppBar from "../components/AppBar";

export default {
  name: "Login",
  components: {
    AppBar,
  },
  data: () => ({
    agreeToTerms: false,
    agreeToTermsRules: [
      (value) => !!value || "You must agree to terms and conditions to sign up",
    ],
    email: "",
    emailRules: [
      (value) => !!value || "Email is required",
      (value) => value.indexOf("@") !== 0 || "Email should have a userame",
      (value) => value.includes("@") || "Email should include an @ symbol",
      (value) =>
        value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extention ",
    ],
    formValidity: false,
  }),
  methods: {
    validateForm() {
      this.$refs.signUpForm.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  align-items: center;
  justify-content: center;
}
.background {
  padding: 0px;
  margin: 0px;
}
.image {
  height: 100vh;
}
.lorem {
  width: 100vw;
  height: 100vh;
  background-color: rgba(190, 190, 190, 0.15);
  backdrop-filter: blur(20px);
  z-index: -1;
}
.fff {
  height: 200px;
  width: 300px;
  z-index: 1;
  background-color: whitesmoke;
  position: absolute;
  left: 50%;
  top: 35%;
  transform: translate(-50%, 0);
  max-width: 600px;
}
</style>
