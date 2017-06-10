<template>
    <div class="races-container">
    Live Races
    <div id="races" class="races">
	<div class="game">
	</div>
	<div class="game">
	</div>
	<div class="game">
	</div>
	<div class="game">
	</div>
    </div>
  </div>  
</template>

<script>
export default {
    name: "races"
};
</script>

<style scoped lang="scss">
@import "../assets/styles/settings.scss";

*,*:before, *:after {
    box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
.races-container{
    background: #eee;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    font-size:25px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.races {
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
}
/* Large */
.races {
  display: flex;
  flex-flow: row wrap;
  /* This aligns items to the end line on main-axis */
  justify-content: space-around;
}

/* Small screens */
@media all and (max-width: 500px) {
  .races {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
.game{
  width: 300px;
  height: 240px;
  margin: 15px;
  background-color: black;
}
</style>
