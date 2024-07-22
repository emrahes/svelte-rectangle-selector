<script lang="ts">
	import type { Rectangle, RectangleStyle } from '$lib';
	import RectangleSelector from '$lib/RectangleSelector.svelte';

	let rectangle: Rectangle | undefined;
	const rectangleStyle: RectangleStyle = {
		border: '2px solid red',
		backgroundColor: 'rgba(255, 0, 0, 0.5)'
	};

	function updateRectangle(newRectangle: Rectangle) {
		rectangle = newRectangle;
	}
</script>

<div>
	<RectangleSelector onUpdateRectangle={updateRectangle} {rectangleStyle}>
		<div class="rectangle-display"></div>
	</RectangleSelector>
</div>

<section>
	<h3>Rectangle Data:</h3>
	{#if rectangle}
		<ul>
			<li>Position X: {rectangle.x}</li>
			<li>Position Y: {rectangle.y}</li>
			<li>Width: {rectangle.width}px</li>
			<li>Height: {rectangle.height}px</li>
		</ul>
	{/if}
</section>

<style>
.rectangle-display {
    height: 500px;
    width: '100%';
    background: green;
    position: relative;
}
</style>
