import { z, image, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		datePublished: z.date(),
		image: image().optional(),
		imageText: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});
export const collections = {
	blog: blogCollection,
};
