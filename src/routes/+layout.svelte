<script>
	import '../app.css';
</script>

<header>
	<a href="/" rel="home">
		<img
			src="https://res.cloudinary.com/jlengstorf/image/upload/w_200,q_auto,f_auto/v1593378984/jason.af/tv.png"
			alt="Drawing of a TV"
		/>
	</a>

	<nav>
		<a href="/corgis">Corgis</a>
		<a href="/food">Food</a>
	</nav>
</header>

<main>
	<slot />
</main>
