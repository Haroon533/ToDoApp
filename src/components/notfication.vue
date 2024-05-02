<template>
    <!-- <v-btn
        @click="this.$store.state.notfication.display=true"
      >
        Open Snackbar
      </v-btn>   -->
      <v-snackbar
      location="bottom right"

v-model="this.$store.state.notfication.display"
        :color="this.$store.state.notfication.class"
        :timeout="this.$store.state.notfication.timeout"
        

        >
        {{ this.$store.state.notfication.text }}
  
        <template v-slot:actions>
          <v-btn
            variant="text"
            @click="this.$store.state.notfication.display= false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
  </template>
<script>
import store from '../store/index';

export default {
    
}
</script>

<style>

</style>