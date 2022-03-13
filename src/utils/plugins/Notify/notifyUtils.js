import { Notify } from "quasar";
import imageAxe from '@/assets/axe_angry.jpeg'

export default {
    NotificationError(message) {
        Notify.create({
            color: 'negative',
            message: message,
            avatar: imageAxe
        });
    }
}