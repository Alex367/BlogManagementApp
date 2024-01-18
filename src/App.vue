<template>
  <AppHeader />
  <router-view />
</template>

<script>
import AppHeader from "./views/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
/*
SPACING SYSTEM (px)
2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

FONT SIZE SYSTEM (px)
10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
*/
@import url("https://fonts.googleapis.com/css2?family=Lato&family=PT+Sans:wght@400;700&display=swap");

html {
  font-size: 62.5%;
}
html,
body {
  width: 100%;
  font-size: 1rem;
  position: relative;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  font-family: "Lato", sans-serif;
  font-family: "PT Sans", sans-serif;
}
.container {
  max-width: 70rem;
  margin: 0 auto;
  position: relative;
  flex: 1;
}
ul {
  margin: 0;
  padding: 0;
}
img {
  border-radius: 0.4rem;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-y: scroll;
}
</style>
