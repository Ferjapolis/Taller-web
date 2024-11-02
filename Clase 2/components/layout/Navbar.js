const Navbar = {
    template: `
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
            
            <v-toolbar-title>CRM Vue.js</v-toolbar-title>
            
            <v-spacer></v-spacer>
            
            <v-btn icon @click="toggleTheme">
                <v-icon>mdi-brightness-6</v-icon>
            </v-btn>
            
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="perfil">
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="salir">
                        <v-list-item-title>Salir</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    `,
    methods: {
        toggleDrawer() {
            this.$store.commit('toggleSidebar');
        },
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        perfil() {
            this.$router.push('/perfil');
        },
        salir() {
            // Implementar lógica de logout
            console.log('Cerrando sesión...');
        }
    }
};