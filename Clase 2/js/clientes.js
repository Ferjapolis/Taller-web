const clientesModule = {
    namespaced: true,
    state: {
        clientes: [],
        clienteActual: null,
        filtros: {
            busqueda: '',
            estado: 'todos'
        },
        loading: false
    },
    mutations: {
        setClientes(state, clientes) {
            state.clientes = clientes;
        },
        addCliente(state, cliente) {
            state.clientes.push(cliente);
        },
        updateCliente(state, cliente) {
            const index = state.clientes.findIndex(c => c.id === cliente.id);
            if (index !== -1) {
                state.clientes.splice(index, 1, cliente);
            }
        },
        deleteCliente(state, id) {
            state.clientes = state.clientes.filter(c => c.id !== id);
        },
        setClienteActual(state, cliente) {
            state.clienteActual = cliente;
        },
        setFiltros(state, filtros) {
            state.filtros = { ...state.filtros, ...filtros };
        },
        setLoading(state, value) {
            state.loading = value;
        }
    },
    actions: {
        async fetchClientes({ commit }) {
            commit('setLoading', true);
            try {
                // Simulamos una llamada API usando localStorage
                const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
                commit('setClientes', clientes);
            } catch (error) {
                console.error('Error al cargar clientes:', error);
            } finally {
                commit('setLoading', false);
            }
        },
        async guardarCliente({ commit, state }, cliente) {
            commit('setLoading', true);
            try {
                // Simulamos una llamada API
                const clientes = [...state.clientes];
                if (cliente.id) {
                    commit('updateCliente', cliente);
                } else {
                    cliente.id = Date.now();
                    commit('addCliente', cliente);
                }
                // Guardamos en localStorage
                localStorage.setItem('clientes', JSON.stringify(state.clientes));
                return true;
            } catch (error) {
                console.error('Error al guardar cliente:', error);
                return false;
            } finally {
                commit('setLoading', false);
            }
        }
    },
    getters: {
        clientesFiltrados: (state) => {
            return state.clientes.filter(cliente => {
                const matchBusqueda = cliente.nombre.toLowerCase()
                    .includes(state.filtros.busqueda.toLowerCase()) ||
                    cliente.email.toLowerCase()
                        .includes(state.filtros.busqueda.toLowerCase());
                
                const matchEstado = state.filtros.estado === 'todos' ||
                    cliente.estado === state.filtros.estado;
                
                return matchBusqueda && matchEstado;
            });
        }
    }
};