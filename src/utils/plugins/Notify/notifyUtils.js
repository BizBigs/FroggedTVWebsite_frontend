import { Notify } from "quasar";
import imageAxe from "@/assets/axe_angry.jpeg";
import imageJug from "@/assets/jugghappy.jpg";
import imageWr from "@/assets/wrconfused.png";

const commonSetup = {
  position: "top",
  progress: true,
  classes: "q-mt-xl",
};

const NotificationsSnackbar = {
  NotificationError(message) {
    commonSetup.color = "negative";
    commonSetup.avatar = imageAxe;
    commonSetup.message = message;
    Notify.create(commonSetup);
  },
  NotificationSuccess(message) {
    commonSetup.color = "positive";
    commonSetup.avatar = imageJug;
    commonSetup.message = message;
    Notify.create(commonSetup);
  },
  NotificationWarning(message) {
    commonSetup.color = "warning";
    commonSetup.avatar = imageWr;
    commonSetup.message = message;
    Notify.create(commonSetup);
  },
};

export default NotificationsSnackbar;
