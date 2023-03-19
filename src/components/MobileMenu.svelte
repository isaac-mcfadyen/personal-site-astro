<script lang="ts">
	let open = false;

	const buttonClass = "m-2 py-2 px-4 rounded border-white border header-button";
</script>

<div
	class="md:hidden w-full h-[60px] flex justify-start items-center bg-slate-800 px-4 sticky top-0"
>
	<span class="font-bold text-xl pr-8">IM</span>
	<button class="ml-auto" on:click={() => (open = !open)}
		><svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"
			/></svg
		>
	</button>
</div>

{#if open}
	<div
		class="text-center absolute top-0 left-0 bottom-0 right-0 bg-slate-800 z-10"
	>
		<span class="absolute top-0 left-0 px-4 py-4 font-bold text-xl pr-8"
			>IM</span
		>
		<button
			class="absolute top-0 right-0 px-4 py-3"
			on:click={() => (open = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="40"
				height="40"
				viewBox="0 0 256 256"
				><path
					fill="currentColor"
					d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
				/></svg
			>
		</button>
		<div class="w-full h-full flex flex-col justify-center items-center">
			<span class="font-bold mb-8">Isaac McFadyen's Site</span>
			<a class={buttonClass} href="/">Home</a>
			<a class={buttonClass} href="/blog">Blog</a>
			<a class={buttonClass} href="/as213339">AS213339</a>
			<a class={buttonClass} href="/contact">Contact Me</a>
		</div>
	</div>
{/if}
