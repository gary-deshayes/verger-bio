import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    // Champ d'affiliation optionnel : produit principal de l'article
    affiliateProduct: z
      .object({
        name: z.string(),
        price: z.string().optional(),
        url: z.string(),
      })
      .optional(),
  }),
});

export const collections = { blog };
