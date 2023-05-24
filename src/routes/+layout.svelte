<script>
	import '../app.postcss';
	import { goto } from '$app/navigation';
	const frFlag = 'images/fr-flag.svg'
	const usFlag = 'images/us-flag.svg'
	const utLogo = 'images/ut-logo.svg'
	const githubLogo = 'images/github-logo.svg'
	function toggle() {
	window.document.body.classList.toggle('dark-mode')
}

export function notImplementedLang() {
  goto('/change-language');
}

</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
	  <a href="/" class="btn btn-ghost normal-case text-xl">Urpagin's Tools</a>
	</div>
	<div class="flex-none">
	  <ul class="menu menu-horizontal px-1">
		<li>
			<label class="swap swap-flip text-9x1">
				<!-- this hidden checkbox controls the state -->
				<input type="checkbox" on:click={notImplementedLang}/>
				<div class="swap-on"><img src={frFlag} alt="French flag"></div>
				<div class="swap-off"><img src={usFlag} alt="USA flag"></div>
			  </label>
		</li>
		<li><a href="/random-list">Random List</a></li>
		<li><a href="/converter">Converter</a></li>
		<li><a href="/about">About</a></li>
	  </ul>
	</div>
  </div>

<slot />

  <footer class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="items-center grid-flow-col">
		<img class="ut-logo" src={utLogo} alt="Urpagin's Tools logo">
		<p>Copyright © 2023 - All right reserved</p>
	</div>
	<!--<a href="/"><p class="about">About</p></a>	  	 I should make a <li> here -->
	<!-- <button on:click={toggle}>DarkMode</button> -->
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a class="github-logo" href="https://github.com/Urpagin" target="_blank"><img src={githubLogo} alt="GitHub logo"></a>
	</div>
  </footer>


<style>
	.navbar {
		background-color: #242932;
	}
	.footer {
		margin-top: auto;
	}
	.github-logo {
		width: 35px;
		height: auto;
	}
	.about {
		text-align: left;
	}
	.ut-logo {
		width: 35px;
		height: auto;
	}
	.swap-on { /* The language switcher */
		width: 40px;
	}
</style>
