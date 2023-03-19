<script lang="ts">
	import { onMount } from "svelte";

	let success: true | false | null = null;

	onMount(() => {
		const url = new URL(window.location.href);
		if (url.searchParams.get("success") != null) {
			if (url.searchParams.get("success") == "true") {
				success = true;
			} else {
				success = false;
			}
		} else {
			success = null;
		}
	});
</script>

{#if success === true}
	<p class="text-green-400 font-bold">Successfully submitted message!</p>
{:else if success === false}
	<p class="text-red-400 font-bold">
		Failed to submit message. Please try again later
	</p>
{/if}
