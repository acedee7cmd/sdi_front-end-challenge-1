<template>
  <div>
    <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders bg-positive text-test">
      
      <q-page-container>
        <transition
          enter-active-class="animated slideInLeft"
          leave-active-class="animated slideOutRight"
          appear
        >
          <router-view />
        </transition>
      </q-page-container>
    </q-layout>

  </div>
</template>
<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import { defineComponent, ref } from 'vue'
import {
  Loading,
  QSpinnerGears
} from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  setup () {

    return {}
  },
  computed: {
  },
  data: () => ({
    loader: false,
    confirm_dialog: false,
    alert: false,
    alertMessage: '',
    alertBGColor: 'bg-green',
    alertColor: 'text-green',

    loader_text: "",
  }),
  methods: {
  },
  async beforeMount() {
  },
  watch: {
  
  }
})
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

@media screen and (max-width: 600px) {
  .q-menu {
    width: 100%!important;
    max-width: 100%!important;
  }
}
</style>
