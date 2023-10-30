<template>
  <v-data-table
    :headers="headers"
    :items="Discos"
    sort-by="Nombre"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>DISCOS</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn  class="mb-2" v-bind="attrs" v-on="on">
              Agregar nuevo disco
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.Nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <!--v-text-field
                      v-model="editedItem.Artista"
                      label="Artista"
                    ></v-text-field-->

                    <v-combobox
                        label="Artista"
                        :items="artistas"
                    ></v-combobox>


                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.Año"
                      label="Año"
                    >
                        
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title>Confirmar eliminación</v-card-title>
              <v-card-text>
                  ¿Seguro que deseas eliminar este artista?
              </v-card-text>

            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">Continuar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)" color="red"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    artista: null,
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Nombre", align: "start", value: "Nombre" },
      { text: "Artista", value: "Artista" },
      { text: "Año", value: "Año" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    Discos: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      Nombre: 0,
      Artista: 0,
      Año: 0,
    },
    defaultItem: {
      name: "",
      Nombre: 0,
      Artista: 0,
      Año: 0,
    },
  }),

  computed: {
    artistas(){
        return this.$store.state.artistas;
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.Discos = [
        {
          Nombre: "The Fame",
          Artista: "Lady Gaga",
          Año: "2008",
        },
        {
          Nombre: "Music of the Sun",
          Artista: "Rihanna",
          Año: "2018",
        },
        {
          Nombre: "Sour",
          Artista: "Olivia Rodrigo",
          Año: "2021",
        },
        {
          Nombre: "Future Nostalgia",
          Artista: "Dua Lipa",
          Año: "2020",
        },
        {
          Nombre: "24k Magic",
          Artista: "Bruno Mars",
          Año: "2016",
        },
        {
          Nombre: "Nine Track Mind",
          Artista: "Charlie Puth",
          Año: "2016",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.Discos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.Discos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.Discos.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.Discos[this.editedIndex], this.editedItem);
      } else {
        this.Discos.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>