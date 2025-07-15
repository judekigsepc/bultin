import z from "zod";

export const answerSchema = z.object({
    content: z.string(),
    forQuestion: z.string(),
})