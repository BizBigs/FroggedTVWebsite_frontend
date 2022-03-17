<template>
  <q-form @submit="onSubmit">
    <q-input
      rounded
      outlined
      v-model="form.nickname"
      label="Pseudo"
      :rules="[(val) => !!val]"
      lazy-rules="ondemand"
    />
    <q-input
      rounded
      outlined
      v-model="form.email"
      label="E-mail"
      type="email"
      :rules="[(val) => !!val]"
      lazy-rules="ondemand"
    />
    <q-input
      rounded
      outlined
      v-model="form.password"
      label="Mot de passe"
      :type="isPwd ? 'password' : 'text'"
      :rules="[(val) => !!val]"
      lazy-rules="ondemand"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-input
      rounded
      outlined
      v-model="form.passwordConfirm"
      label="Confirmation"
      :type="isPwdConfirm ? 'password' : 'text'"
      :rules="[(val) => !!val]"
      lazy-rules="ondemand"
    >
      <template v-slot:append>
        <q-icon
          :name="isPwdConfirm ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwdConfirm = !isPwdConfirm"
        />
      </template>
    </q-input>
    <q-btn outline rounded color="secondary" label="S'ENREGISTRER" type="submit" />
  </q-form>
</template>

<script>
import { ref, reactive } from "vue";
import axiosApi from "@/utils/plugins/axios/axiosApi";
import router from "@/utils/plugins/router";
import NotificationsSnackbar from "@/utils/plugins/Notify/notifyUtils";

export default {
  name: "RegisterForm",

  setup() {
    const form = reactive({
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });

    const isPwd = ref(true);
    const isPwdConfirm = ref(true);

    const onSubmit = () => {
      if (form.password === form.passwordConfirm) {
        axiosApi
            .post("/register", { nickname: form.nickname, email: form.email, password: form.password })
            .then((response) => {
              if (response.status == 202) {
                NotificationsSnackbar.NotificationWarning(
                    "Pseudo ou mot de passe déjà existant ! Essaie plutôt de te connecter."
                );
              } else {
                NotificationsSnackbar.NotificationSuccess(
                    "Bienvenue dans la FTV  Family !"
                );
                router.push({ name: "Login" });
              }
            })
            .catch(() => {
              NotificationsSnackbar.NotificationError(
                  "Quelque chose ne va pas ! Essaie plus tard !"
              );
            });
      } else {
        NotificationsSnackbar.NotificationError(
            "Le mot de passe et sa confirmation doivent être identiques !"
        );
      }

    };

    return { form, isPwd, isPwdConfirm, onSubmit };
  },
};
</script>

<style scoped></style>
