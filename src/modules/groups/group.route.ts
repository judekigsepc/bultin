
import express from "express"
import { authenticateUser } from "../../middleware/auth.middleware";
import { createGroup } from "./group.controller";

const groupRouter = express.Router()

groupRouter.post('/create', authenticateUser, createGroup)

export default groupRouter
