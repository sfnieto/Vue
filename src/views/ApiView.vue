<template>
  <v-container>
    <v-row>
      <v-col>
        <router-link to="/" class="text-decoration-none">
          <v-btn color="teal" dark>VOLVER A INICIO</v-btn>
        </router-link>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Harry Potter Spells</h2>
        <h3>{{ subtitulo }}</h3>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col>
      <ul v-for="Hechizo in Hechizos" :key="Hechizo.id">
       <v-card class= "my-4"> 
            <v-card-title>{{ Hechizo.name }}</v-card-title>
            <v-card-text>{{ Hechizo.description }}</v-card-text>  
        </v-card> 
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "consulta",
  data() {
    return {
      subtitulo:
        "Ordenados alfabeticamente:",
      Hechizos: [],
    };
  },

  methods: {
    async callAndSave() {
      await axios
        .get("https://hp-api.onrender.com/api/spells")
        .then((response) => {
          this.Hechizos = response.data;
        });
      console.log(this.Hechizos);

      localStorage.setItem("fileLocalStorage", JSON.stringify(this.Hechizos));
      sessionStorage.setItem(
        "fileSessionStorage",
        JSON.stringify(this.Hechizos)
      );
      console.log(localStorage);
      console.log(sessionStorage);
    },
  },
  mounted() {
    this.callAndSave();
  },
};
</script>

<style>
</style>