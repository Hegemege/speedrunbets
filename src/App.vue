<template>
    <div id="app">
        <navbar></navbar>
        <div id="content">
            <router-view></router-view>
        </div>
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

#content {
    margin-left: $content-margins-full;
    margin-right: $content-margins-full;
    background-color: lightblue;
}

/* Medium screens */
@media all and (max-width: 1200px) {
    #content {
        margin-left: 0;
        margin-right: 0;
    }
}

</style>
