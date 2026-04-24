import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const runes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/runes' }),
  schema: z.object({
    name:            z.string(),
    slug:            z.string(),
    version:         z.string(),
    status:          z.enum(['draft', 'stable', 'deprecated']),
    archetypes:      z.array(z.string()),
    namespace:       z.string(),
    radar:           z.string(),
    test_sentence:   z.string(),
    instances:       z.number(),
    first_instanced: z.coerce.string(),
  }),
});

export const collections = { runes };
