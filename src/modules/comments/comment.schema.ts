import z from "zod"

export const commentSchema = z.object({
    content: z.string(),
    forAnswer: z.string(),
    reason: z.enum(["reply","disagree"])
})