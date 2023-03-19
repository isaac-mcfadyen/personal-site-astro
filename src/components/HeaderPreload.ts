let added: string[] = [];
window.addEventListener("DOMContentLoaded", () => {
	const buttons = document.querySelectorAll(
		"a.header-button"
	) as NodeListOf<HTMLAnchorElement>;
	for (const button of buttons) {
		if (button.href != window.location.href) {
			button.addEventListener("mouseover", () => {
				if (added.includes(button.href)) return;
				const link = document.createElement("link");
				link.rel = "prefetch";
				link.href = button.href;
				document.head.appendChild(link);
				added.push(link.href);
			});
		}
	}
});
export {};
