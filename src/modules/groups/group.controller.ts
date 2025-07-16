import { Request, Response } from "express";
import { validateRequestBody } from "../../utils/validation/validateRequest";
import Group from "./group.model";
import { sendError } from "../../utils/sendError";
import { sendSuccess } from "../../utils/sendSuccess";

export const createGroup = async (req: Request, res: Response) => {
    try {
       validateRequestBody("creation","group",req)

       const groupData = {
        name: req.body.name,
        owner: req.user._id
       }

       const createdGroup = await Group.create(groupData)

       sendSuccess(201,"Group created successfuly",createdGroup,res)
       
    }catch(err) {
        sendError(500,"Group creation failed",err,res)
    }
}

export const addGroupMembers = async (req:Request, res:Response) => {
    try {
       validateRequestBody("creation","add-group-members",req)

       
    }catch (err) {
       sendError(500,"Group member addition failed",err,res)
    }
}