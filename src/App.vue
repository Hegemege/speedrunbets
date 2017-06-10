<template>
    <div id="app">
        <navbar></navbar>
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="content">
            <p v-for="game in gameData">
                {{ game.Id }} - {{ game.Name }} - {{ game.Description }}
            </p>
        </div>
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
    name: "app",
    data () {
        return {
            gameData: []
        };
    },
    components: { // Encapsulated in it's own Navbar.vue file
        "navbar": Navbar
    },
    created: function () {
        this.$http.get("/api/hello").then(response => {
            this.$data.gameData = response.body;
        }, error => {
            throw error;
        });
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

.content {
    margin-left: $content-margins-full;
    margin-right: $content-margins-full;
    background-color: lightblue;
}

/* Medium screens */
@media all and (max-width: 1200px) {
    .content {
        margin-left: 0;
        margin-right: 0;
    }
}

</style>
