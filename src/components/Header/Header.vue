<template>
  <q-header elevated class="row text-white justify-center items-center">
    <q-toolbar class="justify-between">
      <q-toolbar-title>
        <q-avatar>
          <img :src="logo" />
        </q-avatar>
      </q-toolbar-title>
      <div v-if="!store.isLoggedIn() && $router.currentRoute.value.name === 'Login'">
        <q-btn
          outline
          rounded
          color="secondary"
          label="S'ENREGISTRER"
          @click="onClickRegister"
          class="text-white"
        />
      </div>
      <div v-if="$router.currentRoute.value.name === 'Register'">
        <q-btn
            outline
            rounded
            color="secondary"
            label="SE CONNECTER"
            @click="onClickLogin"
            class="text-white"
        />
      </div>
      <div v-if="store.isLoggedIn()">
        <q-tabs v-model="tab">
          <q-tab name="news" label="News" />
          <q-tab name="calendar" label="Calendrier" />
          <q-btn-dropdown flat label="League" />
          <q-btn-dropdown flat label="E-Sport" />
          <q-btn-dropdown flat label="Emissions" />
          <q-tab name="vod" label="VOD" />
          <q-tab name="staff" label="Staff" />
        </q-tabs>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import logoFTV from "@/assets/ftv.svg";
import { store } from "@/utils/plugins/store/store";
import { ref } from "vue";
import router from "@/utils/plugins/router";

export default {
  name: "Header",

  data: () => ({
    store: store,
  }),

  setup() {
    const tab = ref("");
    const logo = ref(logoFTV);

    const onClickRegister = () => {
      router.push({ name: "Register" });
    };

    const onClickLogin = () => {
      router.push({ name: "Login" });
    };

    return { tab, logo, onClickRegister, onClickLogin };
  },
};
</script>

<style scoped>
.q-header {
  min-height: 55px;
  background-color: rgba(10, 10, 10, 0.6);
}
.q-toolbar {
  width: 60%;
}
</style>
