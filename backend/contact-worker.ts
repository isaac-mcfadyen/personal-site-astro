export default {
	async fetch(request: Request, env: any) {
		try {
			if (request.method != "POST") {
				return new Response("Method not allowed", { status: 405 });
			}
			if (!request.url.endsWith("/contact")) {
				return new Response("Not found", { status: 404 });
			}

			const body = await request.formData();
			const name = body.get("name");
			const email = body.get("email");
			const message = body.get("message");
			const turnstileResponse = body.get("cf-turnstile-response");
			const ip = request.headers.get("CF-Connecting-IP");

			if (
				name == null ||
				email == null ||
				message == null ||
				turnstileResponse == null
			) {
				return Response.redirect("https://imcf.me/contact?success=false");
			}

			const formData = new FormData();
			formData.append("secret", env.TURNSTILE_SECRET);
			formData.append("response", turnstileResponse);
			formData.append("remoteip", ip || "");
			const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
			const result = await fetch(url, {
				body: formData,
				method: "POST",
			});

			const outcome = await result.json();
			if (outcome.success) {
				const payload = {
					content: `**New contact form submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
				};
				const url = env.WEBHOOK_URL;
				await fetch(url, {
					body: JSON.stringify(payload),
					headers: {
						"Content-Type": "application/json",
					},
					method: "POST",
				});

				return Response.redirect("https://imcf.me/contact?success=true");
			} else {
				return Response.redirect("https://imcf.me/contact?success=false");
			}
		} catch (e: any) {
			console.error(e, e.stack);
			return new Response("Internal server error", { status: 500 });
		}
	},
};
