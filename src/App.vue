<template>
  <router-view />
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  async beforeMount () {
    
  },
  data: () => ({
    hasQue: false,
    advanceOrderSound: require('assets/sounds/advanced.mp3'),
    editedOrderSound: require('assets/sounds/edited.mp3'),
    audio: new Audio(require('assets/sounds/sound.mp3'))
  }),

  computed: {
    ...mapGetters('Auth', {
      profile: 'GET_PROFILE'
    }),
  },
  methods: {
    ...mapActions('Auth', [
      'getProfile'
    ]),
    ...mapActions('Notification', [
      'getNotifications'
    ])
  },
  watch: {
    
  }
})
</script>
