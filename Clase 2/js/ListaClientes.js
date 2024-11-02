const ListaClientes = {
    template: `
        <v-card>
            <v-card-title>
                Gestión de Clientes
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="busqueda"
                    append-icon="mdi-magnify"
                    label="Buscar"
                    single-line
                    hide-details
                    class="mr-4"
                ></v-text-field>
                <v-select
                    v-model="estado"
                    :items="estadosDisponibles"
                    label="Estado"
                    hide-details
                    class="mr-4"
                    style="max-width: 150px"
                ></v-select>
                <v-btn
                    color="primary"
                    @click="abrirDialogoNuevo"
                >
                    Nuevo Cliente
                </v-btn>
            </v-card-title>

            <v-data-table
                :headers="headers"
                :items="clientes"
                :loading="loading"
                :search="busqueda"
                class="elevation-1"
            >
                <template v-slot:item.estado="{ item }">
                    <v-chip
                        :color="getEstadoColor(item.estado)"
                        small
                    >
                        {{ item.estado }}
                    </v-chip>
                </template>
                
                <template v-slot:item.actions="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editarCliente(item)"
                    >
                        mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        @click="eliminarCliente(item)"
                    >
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>

            <!-- Diálogo de Cliente -->
            <v-dialog
                v-model="dialogoCliente"
                max-width="600px"
            >
                <v-card>
                    <v-card-title>
                        {{ clienteActual ? 'Editar' : 'Nuevo' }} Cliente
                    </v-card-title>
                    
                    <v-card-text>
                        <v-form ref="form" v-model="formularioValido">
                            <v-row>
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        v-model="formularioCliente.nombre"
                                        label="Nombre"
                                        :rules="reglas.nombre"
                                        required
                                    ></v-text-field>
                                </v-col>
                                
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        v-model="formularioCliente.email"
                                        label="Email"
                                        :rules="reglas.email"
                                        required
                                    ></v-text-field>
                                </v-col>
                                
                                <v-col cols="12" sm="6">
                                    <v-text-field
                                        v-model="formularioCliente.telefono"
                                        label="Teléfono"
                                        :rules="reglas.telefono"
                                    ></v-text-field>
                                </v-col>
                                
                                <v-col cols="12" sm="6">
                                    <v-select
                                        v-model="formularioCliente.estado"
                                        :items="estadosDisponibles"
                                        label="Estado"
                                        required
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                    
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="cerrarDialogo"
                        >
                            Cancelar
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="guardarCliente"
                            :disabled="!formularioValido"
                        >
                            Guardar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Diálogo de Confirmación -->
            <v-dialog
                v-model="dialogoConfirmacion"
                max-width="400"
            >
                <v-card>
                    <v-card-title>
                        Confirmar Eliminación
                    </v-card-title>
                    <v-card-text>
                        ¿Está seguro que desea eliminar este cliente?
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="grey"
                            text
                            @click="dialogoConfirmacion = false"
                        >
                            Cancelar
                        </v-btn>
                        <v-btn
                            color="red"
                            text
                            @click="confirmarEliminacion"
                        >
                            Eliminar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    `,
    data: () => ({
        headers: [
            { text: 'Nombre', value: 'nombre' },
            { text: 'Email', value: 'email' },
            { text: 'Teléfono', value: 'telefono' },
            { text: 'Estado', value: 'estado' },
            { text: 'Acciones', value: 'actions', sortable: false }
        ],
        estadosDisponibles: ['Activo', 'Inactivo', 'Pendiente'],
        dialogoCliente: false,
        dialogoConfirmacion: false,
        formularioValido: true,
        clienteEliminar: null,
        formularioCliente: {
            nombre: '',
            email: '',
            telefono: '',
            estado: 'Activo'
        },
        reglas: {
            nombre: [v => !!v || 'El nombre es requerido'],
            email: [
                v => !!v || 'El email es requerido',
                v => /.+@.+\..+/.test(v) || 'El email debe ser válido'
            ],
            telefono: [
                v => !v || /^\d{10}$/.test(v) || 'El teléfono debe tener 10 dígitos'
            ]
        }
    }),
    computed: {
        busqueda: {
            get() {
                return this.$store.state.clientes.filtros.busqueda;
            },
            set(value) {
                this.$store.commit('clientes/setFiltros', { busqueda: value });
            }
        },
        estado: {
            get() {
                return this.$store.state.clientes.filtros.estado;
            },
            set(value) {
                this.$store.commit('clientes/setFiltros', { estado: value });
            }
        },
        clientes() {
            return this.$store.getters['clientes/clientesFiltrados'];
        },
        loading() {
            return this.$store.state.clientes.loading;
        }
    },
    methods: {
        getEstadoColor(estado) {
            const colores = {
                'Activo': 'green',
                'Inactivo': 'grey',
                'Pendiente': 'orange'
            };
            return colores[estado] || 'grey';
        },
        abrirDialogoNuevo() {
            this.formularioCliente = {
                nombre: '',
                email: '',
                telefono: '',
                estado: 'Activo'
            };
            this.dialogoCliente = true;
        },
        editarCliente(cliente) {
            this.formularioCliente = { ...cliente };
            this.dialogoCliente = true;
        },
        async guardarCliente() {
            if (this.$refs.form.validate()) {
                const exito = await this.$store.dispatch('clientes/guardarCliente', this.formularioCliente);
                if (exito) {
                    this.cerrarDialogo();
                }
            }
        },
        cerrarDialogo() {
            this.dialogoCliente = false;
            this.$refs.form.reset();
        },
        eliminarCliente(cliente) {
            this.clienteEliminar = cliente;
            this.dialogoConfirmacion = true;
        },
        async confirmarEliminacion() {
            if (this.clienteEliminar) {
                await this.$store.commit('clientes/deleteCliente', this.clienteEliminar.id);
                localStorage.setItem('clientes', JSON.stringify(this.$store.state.clientes.clientes));
                this.dialogoConfirmacion = false;
                this.clienteEliminar = null;
            }
        }
    },
    created() {
        this.$store.dispatch('clientes/fetchClientes');
    }
};