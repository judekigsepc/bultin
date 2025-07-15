import z from "zod";

export const groupSchema = z.object({
    name: z.string(),
    owner:z.string(),
    members: z.string().array(),
})
