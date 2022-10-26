<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

{data.edge}

<h1>Learn About Our Products</h1>
<section class="products">
	<div class="product" data-category="corgi">
		<img
			src="https://images.unsplash.com/photo-1612536057832-2ff7ead58194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80&h=400&crop=entropy"
			alt="A corgi with hearts on it."
		/>
		<h2>A Loving Corgi</h2>
		<p>
			This corgi just can't contain all the love it has inside. Some of it managed to get free, and
			now it's caught in its fur.
		</p>
		<p class="details-link">
			<a href="/corgis/loving">Details</a>
		</p>
	</div>
	<div class="product" data-category="food">
		<img
			src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60&h=400&crop=center"
			alt="A pepperoni pizza."
		/>
		<h2>Pepperoni Pizza</h2>
		<p>
			Since the invention of food, there have been five foods rated the most passionate, the most
			pure. This one left them all behind.
		</p>
		<p class="details-link">
			<a href="/food/pizza">Details</a>
		</p>
	</div>
	<div class="product" data-category="corgi">
		<img
			src="https://images.unsplash.com/photo-1628148366072-3337dd316e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80&h=400&crop=center"
			alt="Two corgis wearing sweaters."
		/>
		<h2>Corgi Buddies</h2>
		<p>
			The thing about wearing a sweater as a dog is that it's only about fashion. You know you'll be
			warm because you've already got a coat, right?
		</p>
		<p class="details-link">
			<a href="/corgis/buddies">Details</a>
		</p>
	</div>
	<div class="product" data-category="food">
		<img
			src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60&h=400&crop=center"
			alt="A burger."
		/>
		<h2>Cheeseburger</h2>
		<p>
			Done right, a cheeseburger is the ultimate representation of American cuisine: it borrows,
			extends, and becomes something truly unique and special.
		</p>
		<p class="details-link">
			<a href="/food/cheeseburger">Details</a>
		</p>
	</div>
	<div class="product" data-category="corgi">
		<img
			src="https://images.unsplash.com/photo-1598894591353-9e7c935dd774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80&h=400&crop=center"
			alt="A corgi puppy."
		/>
		<h2>Corgi Puppy</h2>
		<p>
			Puppies are almost always adorable. The sneaky thing about corgis is that they stay cute into
			adulthood — mostly due to their fluffy butts.
		</p>
		<p class="details-link">
			<a href="/corgis/puppy">Details</a>
		</p>
	</div>
	<div class="product" data-category="food">
		<img
			src="https://images.unsplash.com/photo-1624277904878-120554c46c2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRvbnV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60&h=400&crop=center"
			alt="A donut."
		/>
		<h2>Iced Donut</h2>
		<p>
			Donuts are a rare exception to the rule that you shouldn't eat colors that don't occur in
			nature. Go ahead and chomp on those rainbow sprinkles.
		</p>
		<p class="details-link">
			<a href="/food/donut">Details</a>
		</p>
	</div>
</section>
