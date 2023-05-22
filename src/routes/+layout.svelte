<script>
	import '../app.postcss';
	const frFlag = 'images/fr-flag.svg'
	const usFlag = 'images/us-flag.svg'
	const utLogo = 'images/ut-logo.svg'
	const githubLogo = 'images/github-logo.svg'
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
				<input type="checkbox" />
				<div class="swap-on"><img src={frFlag} alt="French flag"></div>
				<div class="swap-off"><img src={usFlag} alt="USA flag"></div>
			  </label>
		</li>
		<li><a href="/random-list">Random List</a></li>
		<li><a href="/">Converter</a></li>
	  </ul>
	</div>
  </div>

<slot />

<!-- <footer class="footer p-10 bg-base-200 text-base-content">
	<div>
	  <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
	  <p>The Urpagin Company<br/>Providing reliable tech since 1992</p>
	</div>
	<div>
	  <span class="footer-title">Company</span> 
	  <a href="/" class="link link-hover">About us</a> 
	  <a href="/" class="link link-hover">Contact</a> 
	  <a href="/" class="link link-hover">Jobs</a> 
	  <a href="/" class="link link-hover">Press kit</a>
	</div> 
  </footer> -->

  <footer class="footer items-center p-4 bg-neutral text-neutral-content">
	<div class="items-center grid-flow-col">
		<img class="ut-logo" src={utLogo} alt="Urpagin's Tools logo">
		<p>Copyright © 2023 - All right reserved</p>
	</div> 
	<div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
		<a class="github-logo" href="https://github.com/Urpagin" target="_blank"><img src={githubLogo} alt="GitHub logo"></a>
	</div>
  </footer>


<style>
	.navbar {
		background-color: #242932;
	}
	.footer {
		position: fixed;
		bottom: 0;
		width: 100vw;
	}
	.github-logo {
		width: 35px;
		height: auto;
	}
	.ut-logo {
		width: 35px;
		height: auto;
	}
	.swap-on { /* The language switcher */
		width: 40px;
	}
</style>
