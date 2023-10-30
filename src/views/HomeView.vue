<<template>
  <v-container>
     <h1 class="text-center">¡Bienvenido!</h1>
     <h2>{{ subtitulo }}</h2>
     <h3>{{ subtitulo2 }}</h3>
     <h4>{{ subtitulo3 }}</h4>
     <h4>{{ subtitulo4 }}</h4>
    <v-spacer></v-spacer>
    <v-col>
      <router-link to="/artistas" class="text-decoration-none">
        <v-btn block color="teal" dark elevation="12">ARTISTAS</v-btn>
      </router-link>
    </v-col>
    <v-col>
      <router-link to="/discos" class="text-decoration-none">
        <v-btn block color="teal" dark elevation="12">DISCOS</v-btn>
      </router-link>
    </v-col>
    <v-col>
      <router-link to="/api" class="text-decoration-none">
        <v-btn block color="teal" dark elevation="12">CONSULTA API</v-btn>
      </router-link>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      subtitulo: "Mi nombre es Sofía Nieto Botija.",
      subtitulo2:
        "Estás en la páguina de inicio.",
      subtitulo3:
        " - Para consultar las listas de artistas y discos pulsa: ARTISTAS / DISCOS ",
      subtitulo4:
        " - Para consultar los hechizos de Harry Potter pulsa: CONSULTA API",
    };
  },
  components: {},
};
</script>
