import z from "zod";

export const topicSchema = z.object({
    name: z.string(),
    forGroup: z.string()
})