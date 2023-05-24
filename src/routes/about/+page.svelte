<script>
    const sveltekitLogo = 'images/sveltekit-logo.png'
    const tailwindLogo = 'images/tailwind-logo.svg'
    const daisyuiLogo = 'images/daisyui-logo.svg'
</script>

<div class="main">
    <h1 class="mb-4 text-4xl underline font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white title">Technnologies du site:</h1>


    <div class="sveltekit subtitle">
        <a href="https://kit.svelte.dev/" target="_blank"><h2 class="text-4xl title-sveltekit hover:text-blue-500">Sveltekit</h2></a>
        <p>
            SvelteKit est un framework web moderne qui permet de créer des applications web réactives et performantes.<br>
            Il facilite le développement en combinant les concepts de la compilation côté serveur (server-side rendering) et du rendu côté client (client-side rendering).<br>
            SvelteKit se distingue par sa simplicité et sa légèreté, ce qui le rend idéal pour construire des sites web rapides et efficaces.
        </p>
        <a href="https://kit.svelte.dev/" target="_blank"><img class="sveltekit-logo mx-auto block" src={sveltekitLogo} alt="sveltekit logo"></a>
    </div>


    <div class="tailwind subtitle">
        <a href="https://tailwindcss.com/" target="_blank"><h2 class="text-4xl title-sveltekit hover:text-blue-500">Tailwind CSS</h2></a>
        <p>
            Tailwind CSS est une bibliothèque de styles CSS qui facilite la création de mises en page et de designs pour les sites web.<br>
            Au lieu d'utiliser des classes prédéfinies pour chaque élément, comme c'est le cas dans d'autres frameworks, Tailwind CSS utilise une approche basée sur les utilitaires.<br>
            Cela signifie que vous pouvez appliquer des classes directement dans votre code HTML pour définir rapidement et facilement des styles spécifiques <br>
            tels que la taille, la couleur, la marge, le padding, etc. Tailwind CSS offre une flexibilité et une personnalisation maximales, ce qui en fait un outil puissant pour les développeurs et les designers.
        </p>
        
        <a href="https://tailwindcss.com/" target="_blank"><img class="sveltekit-logo mx-auto block" src={tailwindLogo} alt="tailwindcss logo"></a>
    </div>


    <div class="daisyui subtitle">
        <a href="https://daisyui.com/" target="_blank"><h2 class="text-4xl title-sveltekit hover:text-blue-500">DaisyUi</h2></a>
        <p>
            DaisyUI est une extension pour le framework Tailwind CSS qui ajoute des composants prêts à l'emploi et des classes utilitaires supplémentaires.
            Cela permet de simplifier encore plus le processus de conception et de développement des sites web. Avec DaisyUI, vous disposez d'une collection de
            composants esthétiques et réutilisables tels que des boutons, des cartes, des barres de navigation, des alertes, etc. De plus, DaisyUI propose des
            classes utilitaires pratiques pour des fonctionnalités courantes telles que la gestion des couleurs, des espacements prédéfinis, des styles de typographie
            et bien plus encore. En résumé, DaisyUI étend les fonctionnalités de Tailwind CSS pour vous aider à créer des interfaces élégantes et conviviales plus rapidement et plus facilement.
        </p>
        <a href="https://daisyui.com/" target="_blank"><img class="sveltekit-logo daisyui-logo mx-auto block" src={daisyuiLogo} alt="daisyui logo"></a>
        
    </div>

</div>





<style>

    .main {
        padding-left: 20px;
        padding-top: 20px;
        text-align: center;
    }

    .title {
        padding-bottom: 20px;
    }

    .sveltekit-logo {
        /* width: 500px; */
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
    }

    .daisyui-logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 40%;
        padding-top: 100px;
        padding-bottom: 100px;
    }


    
    .subtitle {
        padding-top: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
        margin-right: 20%;
        margin-left: 20%;
        margin-top: 10px;
        /* width: 1520px; */
        
        background-color: #1d222b;

    }
    .daisyui {
        padding-bottom: 200px;
    }

    .title-sveltekit {
        padding-bottom: 10px;
    }
</style>
