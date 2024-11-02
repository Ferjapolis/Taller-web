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