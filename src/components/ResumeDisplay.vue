<template>
  <div id="resume">
    <v-col cols="12" md="8">
      <h1>{{ store.name }}</h1>
      <span>{{ store.title }}</span>
      <h4>{{ store.email }}</h4>
      <h4>{{ store.phone }}</h4>
      <p>{{ store.summary }}</p>
      <div class="skills">
        <h2 v-if="store.skills[0]">Skills</h2>
        <v-chip v-for="skill in store.skills" :key="skill">
          {{ skill }}
        </v-chip>
      </div>
      <div class="experiences">
        <h2 v-if="store.experiences[0]">Experiences</h2>
        <p
          v-for="experience in store.experiences"
          :key="experience"
          class="experience"
        >
          {{ experience }}
        </p>
      </div>
      <v-btn
        v-if="
          store.name &&
          store.title &&
          store.phone &&
          store.email &&
          store.summary
        "
        @click="exportToPDF"
        >Export to PDF</v-btn
      >
    </v-col>
  </div>
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useStore } from "@/store/index";

export default {
  name: "ResumeDisplay",

  data() {
    return {
      store: "",
    };
  },
  created() {
    this.store = useStore();
  },
  methods: {
    exportToPDF() {
      const element = document.getElementById("resume");
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const doc = new jsPDF({
          orientation: "portrait",
          unit: "px",
          format: [canvas.width, canvas.height],
        });
        doc.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        doc.save("resume.pdf");
      });
    },
  },
};
</script>

<style scoped>
#resume {
  padding: 24px;
  width: 100%;
}
#resume h1 {
  text-transform: capitalize;
  margin: 16px;
  color: #2c3e50;
}
#resume span,
h4,
p {
  margin: 16px;
}
#resume p {
  padding-bottom: 16px;
  border-bottom: 1px solid #bdbdbe8a;
}
.skills,
.experirences {
  margin: 16px;
  cursor: pointer;
}
</style>
