<template> 
  <v-container>
  <v-row>
      <v-col>
        <h2>
          Páguina de artistas
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
        <Artistas />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Artistas from "@/components/Artistas.vue";

export default {
  name: "artistas",

  components: {
    Artistas
  },
  methods: {
}
};
</script>