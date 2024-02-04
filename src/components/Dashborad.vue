<template>
  <div id="dashboard" class="grey lighten-3">
    <form @submit.prevent="validateForm">
      <label>Name</label>
      <input type="text" v-model="store.name" placeholder="Your Name" />
      <p v-if="errors.name" class="error">{{ errors.name }}</p>

      <label>Title</label>
      <input type="text" v-model="store.title" placeholder="Your Title" />
      <p v-if="errors.title" class="error">{{ errors.title }}</p>

      <label>Email</label>
      <input
        type="email"
        v-model="store.email"
        placeholder="example@gmail.com"
      />
      <p v-if="errors.email" class="error">{{ errors.email }}</p>

      <label>Phone No.</label>
      <input type="phone" v-model="store.phone" placeholder="098765" />
      <p v-if="errors.phone" class="error">{{ errors.phone }}</p>

      <label>Professional Summary</label>
      <textarea v-model="store.summary" placeholder="Summary"></textarea>
      <p v-if="errors.summary" class="error">{{ errors.summary }}</p>

      <label>Skills</label>
      <input
        type="text"
        v-model="tempSkill"
        @keyup="addSkill"
        placeholder="Press space after typing your skills"
      />

      <label>Experirence</label>
      <input
        type="text"
        v-model="tempExperirence"
        @keyup="addExperirence"
        placeholder="Press space after typing your skills"
      />
      <div class="controls">
        <v-btn class="submit-btn" type="submit">Submit</v-btn>
        <v-btn
          class="clear-btn"
          style="background-color: firebrick"
          @click="clearForm"
        >
          Clear
        </v-btn>
      </div>
    </form>
  </div>
</template>

<script>
import { useStore } from "@/store/index";

export default {
  name: "UserDashboard",
  data() {
    return {
      store: "",
      name: "",
      title: "",
      email: "",
      phone: "",
      summary: "",
      tempSkill: "",
      skills: [],
      tempExperirence: "",
      experirences: [],
      errors: {},
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === " " && this.tempSkill) {
        if (!this.store.skills.includes(this.tempSkill)) {
          this.store.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.store.skills = this.store.skills.filter((item) => {
        return skill !== item;
      });
    },
    addExperirence(e) {
      if (e.key === " " && this.tempExperirence) {
        if (!this.store.experirences.includes(this.tempExperirence)) {
          this.store.experirences.push(this.tempExperirence);
        }
        this.tempExperirence = "";
      }
    },
    deleteExperirence(experirence) {
      this.store.experirences = this.store.experirences.filter((item) => {
        return experirence !== item;
      });
    },
    validateForm() {
      this.errors = {};

      if (!this.store.name) {
        this.errors.name = "Name is required.";
      }

      if (!this.store.title) {
        this.errors.title = "Title is required.";
      }

      if (!this.store.email || !/\S+@\S+\.\S+/.test(this.store.email)) {
        this.errors.email = "Valid email is required.";
      }

      if (!this.store.phone || this.store.phone.length < 10) {
        this.errors.phone = "Valid phone number is required.";
      }

      if (!this.store.summary) {
        this.errors.summary = "Professional summary is required.";
      }

      if (Object.keys(this.errors).length === 0) {
        alert("Validation successful!");
      }
    },
    clearForm() {
      this.store.name = "";
      this.store.title = "";
      this.store.email = "";
      this.store.phone = "";
      this.store.summary = "";
      this.store.tempSkill = "";
      this.store.skills = [];
      this.store.tempExperirence = "";
      this.store.experirences = [];
      this.store.errors = {};
    },
    submitForm() {
      alert("Form submitted successfully!");
    },
  },
  created() {
    this.store = useStore();
  },
};
</script>

<style>
#dashboard {
  background-color: rgba(191, 201, 212, 0.394);
  padding: 28px;
  color: #2c3e50;
}
form {
  display: flex;
  flex-direction: column;
}
form input,
form textarea {
  border-bottom: 1px solid rgb(153, 154, 155);
  height: 28px;
  margin: 8px 0 16px;
  outline: none;
}
form label {
  margin-top: 16px;
}

.error {
  color: red;
  font-size: 12px;
}
.controls {
  display: flex;
  justify-content: space-around;
  margin: 36px 0px 24px;
}
</style>
