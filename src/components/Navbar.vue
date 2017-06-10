<template>
    <nav>
        <div class="navitem logo">
            Speedrunbets
        </div>
        <div class="navitem profile">
            <div class="navitem">
                User controls
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar"
};
</script>

<style scoped lang="scss">
@import "../assets/styles/settings.scss";

nav {
    display: flex;
    align-items: stretch; // vertical stretch
    background-color: $navbar-background-color;
}

nav .navitem {
    flex: 1;
}

nav .navitem.logo {
    margin-left: $content-margins-full;
    background-color: tomato;
    flex: 2;
    font-size: 2em;
}

nav .navitem.profile {
    margin-right: $content-margins-full;
    display: flex;
    text-align: center;
    align-items: center;
    background-color: $navbar-profile-background-color;
}

/* Medium screens */
@media all and (max-width: 1200px) {
    nav {
        /* When on medium sized screens, we center it by evenly distributing empty space around items */
        justify-content: space-around;
    }

    nav .navitem.logo {
        margin-left: $content-margins-medium-small;
    }

    nav .navitem.profile {
        margin-right: $content-margins-medium-small;
    }
}

/* Small screens */
@media all and (max-width: 800px) {
    nav {
        /* On small screens, we are no longer using row direction but column */
        flex-direction: column;
    }

    nav .navitem.logo {
        text-align: center;
    }
}

</style>
