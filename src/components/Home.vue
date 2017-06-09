<template>
    <div class="home">
        <h1>Home page</h1>
    </div>
</template>

<script>
export default {
    name: "home",
    data () {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/styles/settings.scss";

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

</style>
