<template>
  <v-container id="app" fluid class="pa-0 fill-height">
    <v-row class="fill-height" no-gutters>
      <v-col cols="12" md="4">
        <Dashboard v-on:updateData="updateData($event)" />
      </v-col>
      <v-col cols="12" md="8">
        <ResumeDisplay v-bind:resumeData="resumeData" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dashboard from './components/Dashborad.vue'
import ResumeDisplay from './components/ResumeDisplay.vue'

export default {
  components: {
    Dashboard,
    ResumeDisplay
  },
  data() {
    return {
      resumeData: {
        name: '',
        title: '',
        email: '',
        phone: '',
        summary: '',
        skills: [],
        experirences: []
      }
    }
  },
  methods: {
    updateData(data) {
      this.resumeData = data;
    }
  }
}
</script>
<style scoped>
  #app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: left;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
</style>
