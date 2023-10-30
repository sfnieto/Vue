<template>

  <v-card>
    <v-card-title>Lista de Artistas</v-card-title>
    <v-list>
        <v-list-item-group v-if="artistas.length > 0">
            <v-list-item v-for="(artista, index) in artistas" :key="index">
                <v-list-item-content>
                    <v-list-item-title>{{ artista }}</v-list-item-title>
                </v-list-item-content>

                <v-icon small class="mr-2" @click="editArtista(index)"> mdi-pencil </v-icon>
                <v-icon small @click="eliminarArtista(index)" color="red"> mdi-delete </v-icon>
                    
            </v-list-item>
        </v-list-item-group>

        <v-list-item v-else>
            <v-list-item-content>No hay artistas.</v-list-item-content>
        </v-list-item>
       
        
        <v-dialog v-model="dialogEliminar" max-width="500px">
            <v-card>
                <v-card-title>Confirmar eliminación</v-card-title>
                <v-card-text>
                    ¿Seguro que deseas eliminar este artista?
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn @click="eliminarArtistaConfirmado">Continuar</v-btn>
                    <v-btn @click="dialogEliminar = false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-list> 

    <v-container>
        <v-text-field v-model="nuevoArtista" label="Nuevo Artista"></v-text-field>
        <v-btn @click="agregarArtista">Agregar Artista</v-btn>
    </v-container>

    <v-snackbar v-model="artistaExistente" color="error">
            El artista ya existe. No se puede añadir.
            <v-btn color="white" @click="artistaExistente = false" light>Cerrar</v-btn>
    </v-snackbar>


    <v-dialog v-model="dialog" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="text-h5">Editar artista</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-text-field  v-model="artistaEditado" label="Nombre"></v-text-field>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue" variant="text" @click="close">Cancel</v-btn>
                <v-btn color="blue" variant="text" @click="save">Save</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-card>
</template>

<script>

export default {
    computed: {
        artistas() {
            return this.$store.state.artistas;
        }
    },

    data: () => ({
        
            dialogEliminar: false, //para eliminar un artista
            indexToDelete: null,// para eliminar un artista

            dialog: false,//para editar
            editedIndex: null,
            artistaEditado: '',      

            nuevoArtista: '', //agregar artista
            artistaExistente: false //para mostrar u ocultar el aviso agregar artista que ya existe
         }),


    methods: {
        eliminarArtista(index) {
            this.indexToDelete = index;
            this.dialogEliminar = true;
        },
        eliminarArtistaConfirmado() {
            this.$store.commit('eliminarArtista', this.indexToDelete);
            this.dialogEliminar = false;
        },
        agregarArtista() {
            // Verificar si el artista ya existe
            if (this.nuevoArtista.trim() !== '') {
                const existeArtista = this.$store.state.artistas.includes(this.nuevoArtista);

                if (existeArtista) {
                    // El artista ya existe, mostrar un mensaje
                    this.artistaExistente = true;

                } else {
                    this.$store.commit('agregarArtista', this.nuevoArtista);
                    this.nuevoArtista = '';
                }
            }   
        },
        editArtista(index) {
            this.artistaEditado = this.artistas[index];
            this.editedIndex = index;
            this.dialog = true;
        },

        close() {
        this.dialog = false;
        this.editedArtista = '';
        this.editedIndex = null;
        
        },

        save() {
            if(this.indiceEditado !== null){
                this.artistas[this.editedIndex]=this.artistaEditado;
            }
            this.artistaEditado = '';
            this.editedIndex  = null;
            this.close();
        
      },
        
    }
};
</script>

    
    