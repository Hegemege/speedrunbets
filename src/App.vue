<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    name: "app",
    data () {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    components: { // Encapsulated in it's own Navbar.vue file
        "navbar": Navbar
    }
};
</script>

<style lang="scss">
@import "assets/styles/settings.scss";

body {
    margin: 0px;
    background-color: $background-color;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
