<template>
    admin
</template>
<script>
import { tweak } from "../../stores/counter.js"
export default {
    name:'dashboard',
      setup() {
    const store = tweak();

    return {
      store,
    };
  },
    mounted(){

        this.store.sidemenu = false

    }
}
</script>