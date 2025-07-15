import z from "zod";

export const questionSchema = z.object({
    name: z.string()
})