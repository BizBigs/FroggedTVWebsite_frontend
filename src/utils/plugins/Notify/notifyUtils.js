import { Notify } from "quasar";
import imageAxe from "@/assets/axe_angry.jpeg";

const commonSetup = {
  position: "top",
  progress: true,
};

const NotificationsSnackbar = {
  NotificationError(message) {
    commonSetup.color = "negative";
    commonSetup.avatar = imageAxe;
    commonSetup.message = message;
    Notify.create(commonSetup);
  },
};

export default NotificationsSnackbar;
