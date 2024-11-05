# Clase 1: Fundamentos SPA y Configuración con Vue.js 2 + Vuetify 2

## 1. Preparación del Entorno
Antes de comenzar a desarrollar una aplicación con Vue.js y Vuetify, es fundamental configurar correctamente nuestro entorno y organizar nuestros archivos. En este paso, estableceremos una estructura de archivos básica que nos ayudará a mantener nuestro proyecto organizado y a facilitar el desarrollo de una aplicación modular. También configuraremos el archivo index.html, que cargará las dependencias necesarias para Vue.js, Vuetify, y nuestro código personalizado.

### Estructura de Archivos Inicial
```
proyecto-crm/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── router.js
│   └── store.js
└── components/
    ├── layout/
    │   ├── Navbar.js
    │   └── Sidebar.js
    └── views/
        ├── Home.js
        ├── Clientes.js
        └── Productos.js
```

### Configuración del index.html
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM Vue.js</title>
    
    <!-- CDN Dependencies -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    
    <!-- Custom CSS -->
    <link href="css/styles.css" rel="stylesheet">
</head>
<body>
    <div id="app">
        <v-app>
            <!-- Router View Container -->
            <navbar></navbar>
            <v-main>
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-main>
        </v-app>
    </div>

    <!-- CDN Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-router@3.x/dist/vue-router.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vuex@3.x/dist/vuex.js"></script>

    <!-- Application Scripts -->
    <script src="js/components/layout/Navbar.js"></script>
    <script src="js/components/layout/Sidebar.js"></script>
    <script src="js/components/views/Home.js"></script>
    <script src="js/router.js"></script>
    <script src="js/store.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
```

## 2. Componentes Base
Los componentes son bloques reutilizables de código que representan distintas partes de nuestra interfaz de usuario, como el menú de navegación (Navbar) o el panel lateral (Sidebar). En esta sección, aprenderemos a construir estos componentes base usando Vuetify, aprovechando sus componentes predefinidos para darle un diseño atractivo y funcional a nuestra aplicación desde el inicio.

### Navbar Component (js/components/layout/Navbar.js)
```javascript
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
```

### Sidebar Component (js/components/layout/Sidebar.js)
```javascript
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
```

## 3. Configuración del Router
En una SPA (aplicación de página única), el enrutamiento es esencial para navegar entre las diferentes vistas sin recargar la página. Usaremos Vue Router para definir y manejar las rutas de nuestra aplicación. En este apartado, configuraremos las rutas básicas de la aplicación y veremos cómo asignar componentes a cada ruta, permitiendo que los usuarios naveguen fácilmente entre distintas secciones.

### router.js
```javascript
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
```

## 4. Configuración del Store
Para manejar el estado global de la aplicación, como el estado del menú lateral o la información del usuario, utilizaremos Vuex. Vuex es la solución de Vue.js para el manejo del estado, y nos permite compartir datos entre diferentes componentes de forma eficiente. En esta sección, configuraremos un store básico que almacenará la información esencial de nuestra aplicación y proveerá mecanismos para modificar ese estado de manera centralizada.

### store.js
```javascript
const store = new Vuex.Store({
    state: {
        sidebarOpen: true,
        user: null,
        theme: 'light'
    },
    mutations: {
        toggleSidebar(state) {
            state.sidebarOpen = !state.sidebarOpen;
        },
        setSidebar(state, value) {
            state.sidebarOpen = value;
        },
        setUser(state, user) {
            state.user = user;
        },
        setTheme(state, theme) {
            state.theme = theme;
        }
    }
});
```

## 5. Inicialización de la Aplicación
Ahora que tenemos nuestros componentes, el enrutador y el estado configurados, es momento de inicializar la aplicación. En este punto, combinaremos todas las piezas configuradas (router, store y Vuetify) en un solo punto de inicio (main.js) y montaremos la aplicación en el elemento principal del DOM, estableciendo así el flujo de funcionamiento básico de nuestra SPA.

### main.js
```javascript
new Vue({
    el: '#app',
    router,
    store,
    vuetify: new Vuetify({
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#1976D2',
                    secondary: '#424242',
                    accent: '#82B1FF',
                    error: '#FF5252',
                    info: '#2196F3',
                    success: '#4CAF50',
                    warning: '#FFC107'
                }
            }
        },
        icons: {
            iconfont: 'mdi'
        }
    }),
    components: {
        'navbar': Navbar,
        'sidebar': Sidebar
    }
});
```

## Ejercicios Prácticos
Con los fundamentos establecidos, es momento de practicar. Los ejercicios prácticos nos permitirán aplicar lo aprendido personalizando aspectos de Vuetify, añadiendo nuevas rutas y extendiendo el menú lateral. Estos ejercicios refuerzan los conceptos clave de personalización, navegación y manejo de interfaces complejas, dándonos experiencia práctica en la construcción de aplicaciones Vue.js.

1. Personalizar el tema de Vuetify
   - Modificar colores primarios y secundarios
   - Implementar modo oscuro

2. Agregar nuevas rutas
   - Crear una vista de perfil
   - Agregar guardias de navegación básicas

3. Extender el Sidebar
   - Agregar submenús
   - Implementar navegación anidada

## Tarea para Casa
La tarea está diseñada para afianzar los conceptos vistos en clase. A través de ejercicios prácticos como personalizar el dashboard, implementar una página de error 404, y hacer persistente el estado del menú lateral, los estudiantes podrán consolidar sus conocimientos y mejorar la funcionalidad de su aplicación. Estos ejercicios servirán para comprender mejor cómo crear una aplicación SPA completa y responsiva.

1. Personalizar el dashboard con al menos 4 widgets diferentes
2. Implementar persistencia del estado del sidebar en localStorage
3. Crear una página de error 404 personalizada
4. Agregar transiciones entre rutas

## Recursos Adicionales
Para ampliar nuestro conocimiento y resolver posibles dudas que puedan surgir en el desarrollo, es útil contar con recursos de consulta. Aquí se incluyen enlaces a la documentación oficial de Vue.js 2, Vuetify, Vue Router, y Vuex. Estos recursos ofrecen información detallada y ejemplos prácticos para ayudar en el aprendizaje y la resolución de problemas al desarrollar con Vue.js.

- [Documentación oficial de Vue.js 2](https://v2.vuejs.org/)
- [Documentación de Vuetify 2](https://v2.vuetifyjs.com/)
- [Guía de Vue Router](https://v3.router.vuejs.org/)
- [Guía de Vuex](https://v3.vuex.vuejs.org/)