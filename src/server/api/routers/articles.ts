import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

const articleSchema = z.object({
  id: z.number(),
  title: z.string(),
  cover_image: z.string().nullable(),
  tag_list: z.array(z.string()),
  url: z.string(),
  comments_count: z.number(),
  positive_reactions_count: z.number(),
  public_reactions_count: z.number(),
  user: z.object({
    username: z.string(),
    profile_image_90: z.string(),
  }),
  published_at: z.string(),
});

export type Article = z.infer<typeof articleSchema>;

export const articlesRouter = createTRPCRouter({
  infiniteArticles: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).nullish(),
        cursor: z.number().nullish(),
      }),
    )
    .query(async ({ input }) => {
      const limit = input.limit ?? 10;
      const cursor = input.cursor ?? 1; // cursor is the page number

      try {
        const response = await fetch(
          `https://dev.to/api/articles?page=${cursor}&per_page=${limit}`,
        );

        if (!response.ok) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Failed to fetch articles from Dev.to",
          });
        }

        const articles = await response.json();
        const parsedArticles = z.array(articleSchema).parse(articles);

        return {
          items: parsedArticles,
          nextCursor: articles.length === limit ? cursor + 1 : undefined,
        };
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new TRPCError({
            code: "PARSE_ERROR",
            message: "Invalid article data received",
            cause: error,
          });
        }
        throw error;
      }
    }),
});
