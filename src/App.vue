<template>
  <q-layout view="lHh Lpr lFf">
    <Header />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "@/components/Header/Header";
export default {
  name: "LayoutDefault",

  components: {
    Header,
  },

  setup() {},
};
</script>

<style lang="scss" scoped>
.q-layout {
  background: linear-gradient(rgba(244, 244, 244, 0.45), #0d0e1b),
    url(./assets/dire.jpeg) center center;
  background-size: cover;
  width: auto;
}
</style>
