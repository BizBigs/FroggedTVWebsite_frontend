<template>
  <q-form @submit="onSubmit">
    <q-input rounded standout v-model="identifier" label="Pseudo ou E-mail" :rules="[val => !!val || 'Field is required']" />
    <q-input
        rounded
        standout
        v-model="password"
        label="Mot de passe"
        :type="isPwd ?
          'password' : 'text'"
        :rules="[val => !!val || 'Field is required']"
    >
      <template v-slot:append>
        <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <q-btn outline rounded color="secondary" label="CONNEXION" type="submit"/>
  </q-form>
</template>

<script>
import {ref} from "vue";
import axiosApi from "@/utils/plugins/axios/axiosApi";
import {store} from "@/utils/plugins/store/store";
import router from "@/utils/plugins/router/index";

export default {
  name: "LoginForm",

  setup() {
    const identifier = ref("");
    const password = ref("");
    const isPwd = ref(true);
    const onSubmit = () => {
      axiosApi.post('/login', {nickname: identifier.value, password: password.value})
          .then(response => {
            let user = response.data.user;
            user.token = response.data.token;
            store.logUser(user);
            router.push({name: 'Home'});
          })
          .catch(error => {
            console.log(error);
          })
    };

    return {identifier, password, isPwd, onSubmit};
  },
}
</script>

<style scoped>

</style>