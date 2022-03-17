<template>
  <q-page>
    <q-card class="fixed-center">
      <RegisterForm />
    </q-card>
  </q-page>
</template>

<script>
import RegisterForm from "@/components/Forms/Auth/RegisterForm";

export default {
  name: "RegisterView",

  components: {
    RegisterForm,
  },
};
</script>

<style scoped></style>
