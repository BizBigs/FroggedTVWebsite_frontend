<template>
  <q-form @submit="onSubmit">
    <q-input
      rounded
      standout
      v-model="form.identifier"
      label="Pseudo ou E-mail"
      :rules="[(val) => !!val || 'Champs obligatoire.']"
    />
    <q-input
      rounded
      standout
      v-model="form.password"
      label="Mot de passe"
      :type="isPwd ? 'password' : 'text'"
      :rules="[(val) => !!val || 'Champ obligatoire.']"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn outline rounded color="secondary" label="CONNEXION" type="submit" />
  </q-form>
</template>

<script>
import { ref, reactive } from "vue";
import axiosApi from "@/utils/plugins/axios/axiosApi";
import { store } from "@/utils/plugins/store/store";
import router from "@/utils/plugins/router/index";
import NotificationsSnackbar from "@/utils/plugins/Notify/notifyUtils";

export default {
  name: "LoginForm",

  setup() {
    const form = reactive({
      identifier: "",
      password: "",
    });
    const isPwd = ref(true);
    const onSubmit = () => {
      axiosApi
        .post("/login", { nickname: form.identifier, password: form.password })
        .then((response) => {
          let user = response.data.user;
          user.token = response.data.token;
          store.logUser(user);
          router.push({ name: "Home" });
        })
        .catch((error) => {
          if (error.response.status == 403) {
            NotificationsSnackbar.NotificationError(
              "Identifiant ou mot de passe incorrect !"
            );
          } else {
            NotificationsSnackbar.NotificationError(
              "Quelque chose ne va pas ! Essaie plus tard !"
            );
          }
        });
    };

    return { form, isPwd, onSubmit };
  },
};
</script>

<style scoped></style>
