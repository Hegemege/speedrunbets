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
    align-items: stretch;
    background-color: $navbar-background-color;
}

nav .navitem {
    flex: 1;
}

nav .navitem.logo {
    flex: 2;
    font-size: 2em;
}

nav .navitem.profile {
    display: flex;
    text-align: center;
    align-items: center;
    background-color: $navbar-profile-background-color;
}

</style>
