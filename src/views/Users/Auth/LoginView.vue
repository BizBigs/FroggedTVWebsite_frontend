<template>
    <q-page>
      <q-card class="fixed-center">
        <q-card-section>

        </q-card-section>
        <q-card-section>
          <LoginForm></LoginForm>
        </q-card-section>
      </q-card>
    </q-page>
</template>

<script>
import LoginForm from "@/components/Forms/Auth/LoginForm";

export default {
  name: "LoginView",

  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
.q-card {
  width: 25%;
}


</style>
