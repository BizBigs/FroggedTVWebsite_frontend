import { reactive } from 'vue';

export const store = reactive({
  user: {},
  logUser(userToLog) {
    this.user = userToLog;
  },
  isLoggedIn() {
    if (!this.user.token) {
      console.log("toto");
      return false;
    }
    console.log("tata");
    return true;
  }
})