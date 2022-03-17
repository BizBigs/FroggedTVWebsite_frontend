<template>
  <q-page>
    <q-card class="fixed-center">
      <q-card-section>
        <RegisterForm />
      </q-card-section>
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

<style lang="scss" scoped>
.q-card {
  width: 25%;
}
</style>
