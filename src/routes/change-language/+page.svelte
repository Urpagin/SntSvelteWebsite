<script>
function refreshPage() {
    location.reload();
  }
</script>

<div class="main">
    <p class="text-xl underline hover:text-blue-500 text1" on:click={refreshPage} on:keydown={refreshPage}>
        Je n'ai malheureusement pas eu le temps d'implémenter cette fonctionnalité: le fait de changer de language sur tout le site en appuyant sur ce bouton
        <br> [CLIQUEZ ICI]
    </p>
    <img class="cat-pic" src="https://cataas.com/cat/says/a%20la%20place,%20une%20image%20de%20chat" alt="cat picture">
</div>


<style>
    .text1 {
        padding-left: 10px;
        padding-top: 5%;
        text-align: center;
    }

    .cat-pic {
        padding-top: 30px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;
    }
    .main {
        min-height: 93vh;
    }
</style>
