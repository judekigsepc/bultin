import z from "zod";

export const groupSchema = z.object({
    name: z.string(),
})

export const addGroupMembersSchema = z.object({
    forGroup: z.string().array()
})