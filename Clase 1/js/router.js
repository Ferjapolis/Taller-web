const routes = [
    {
        path: '/',
        component: {
            template: `
                <v-card class="mx-auto" max-width="1200">
                    <v-card-title>
                        Dashboard
                    </v-card-title>
                    <v-card-text>
                        <p>Bienvenido al CRM</p>
                    </v-card-text>
                </v-card>
            `
        }
    },
    {
        path: '/clientes',
        component: {
            template: `
                <v-card class="mx-auto" max-width="1200">
                    <v-card-title>
                        Gestión de Clientes
                    </v-card-title>
                    <v-card-text>
                        <p>Módulo de clientes en construcción...</p>
                    </v-card-text>
                </v-card>
            `
        }
    },
    // Otras rutas básicas...
];

const router = new VueRouter({
    routes
});