import { defineStore } from "pinia";

export const tweak = defineStore({
  id: "tweak",
  state: () => ({
    tweak: false,
    show: false,
    sidemenu: true
  }),

  actions: {
    cons() {
      this.tweak = true

    },
    uncons() {
      this.tweak = false
    }
  },
});
