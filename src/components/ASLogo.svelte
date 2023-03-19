<script lang="ts">
	import { animate } from "motion";
	import { onMount } from "svelte";

	let title: HTMLHeadingElement;
	let subtitle: HTMLParagraphElement;
	let arrowDown: HTMLDivElement;

	onMount(async () => {
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 200);
		});

		// Start the animations.
		animate(
			title,
			{
				color: "#4b5563",
				scale: 0.9,
			},
			{
				duration: 2,
			}
		);
		await animate(
			subtitle,
			{
				color: "#ffffff",
				scale: 1.1,
			},
			{
				duration: 2,
			}
		).finished;

		// Wait for 1 second.
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 500);
		});

		// Brighten the down arrow.
		animate(
			arrowDown,
			{
				color: "#ffffff",
			},
			{
				duration: 1,
			}
		);
	});
</script>

<div
	class="flex flex-col justify-center items-center"
	style="height: calc(100vh - 60px)"
>
	<h1 bind:this={title} class="text-8xl font-bold text-center mb-8">
		AS213339
	</h1>
	<p bind:this={subtitle} class="text-4xl text-gray-600">
		Isaac McFadyen's Network
	</p>

	<div
		bind:this={arrowDown}
		class="select-none text-gray-600 flex flex-col w-full justify-center items-center absolute bottom-10"
	>
		<p>More Info</p>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="m12 19l-6-6l1.4-1.4l4.6 4.575l4.6-4.575L18 13Zm0-6L6 7l1.4-1.4l4.6 4.575L16.6 5.6L18 7Z"
			/></svg
		>
	</div>
</div>
