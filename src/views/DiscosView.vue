<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>
          En la tabla se muestran los discos con sus respectivos artistas:
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <router-link to="/" class="text-decoration-none">
          <v-btn color="teal" dark>VOLVER A INICIO</v-btn>
        </router-link>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Discos />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Discos from "@/components/Discos.vue";
export default {
  name: "discos",
  components: {
    Discos,
  },
};
</script>

<style>
</style>