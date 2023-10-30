<template>
  <v-app>
    <!-- ENCABEZADO DE LA PAGINA -->
    <v-app-bar app color="teal" dark>
      <div class="mx-auto">
        <h1>Práctica de VUE</h1>
      </div>
      <v-spacer></v-spacer>
      <v-icon>mdi-vuejs</v-icon>
    </v-app-bar>
    

    <v-main>
      <router-view />

      <!-- PIE DE PAGINA -->
      <v-footer padless>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Future Space</strong>
        </v-col>
      </v-footer>
    </v-main>

  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
