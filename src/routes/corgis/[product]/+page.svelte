<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="product-full">
	{#each data.products as { name, imageAlt, imageSrc, description, link }}
		{@const splitLink = link.split('/')}
		{#if data.product === splitLink[2]}
			<h1>{name}</h1>
			<div class="product-details">
				<div class="product-image">
					<img src={imageSrc} alt={imageAlt} />
				</div>
				<div class="product-info">
					<p>{description}</p>
					<a href="/">&larr; back to all products</a>
				</div>
			</div>
		{/if}
	{/each}
</section>
