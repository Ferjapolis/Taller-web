const Sidebar = {
    template: `
        <v-navigation-drawer
            v-model="drawer"
            app
            class="pt-4"
        >
            <v-list>
                <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.route"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    `,
    data: () => ({
        menuItems: [
            { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
            { title: 'Clientes', icon: 'mdi-account-group', route: '/clientes' },
            { title: 'Productos', icon: 'mdi-package-variant', route: '/productos' },
            { title: 'Ventas', icon: 'mdi-cart', route: '/ventas' }
        ]
    }),
    computed: {
        drawer: {
            get() {
                return this.$store.state.sidebarOpen;
            },
            set(value) {
                this.$store.commit('setSidebar', value);
            }
        }
    }
};