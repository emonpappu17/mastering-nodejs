import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";
import { User } from "../models/user.model";
import { z } from "zod";

export const usersRoutes = express.Router()

const CreateUserZodSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    age: z.number(),
    email: z.string(),
    password: z.string(),
    role: z.string().optional()
})

usersRoutes.post('/create-user', async (req: Request, res: Response) => {
    try {
        // const body = req.body
        // const zodBody = await CreateUserZodSchema.parseAsync(req.body)

        const body = req.body;

        const user = await User.create(body);

        res.status(201).json({
            success: true,
            message: "user created successfully",
            user
        })
    } catch (error: any) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message,
            error
        })
    }
})

usersRoutes.get('/', async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(201).json({
        success: true,
        message: "all users retrived successfully",
        users
    })
})

usersRoutes.get('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId
    const user = await User.findById(userId);
    res.status(201).json({
        success: true,
        message: "user retrived successfully",
        user
    })
})

usersRoutes.delete('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId
    const user = await User.findByIdAndDelete(userId)
    res.status(201).json({
        success: true,
        message: "user deleted successfully",
        user
    })
})

usersRoutes.patch('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId
    const updatedBody = req.body;
    const user = await User.findOneAndUpdate({ _id: userId }, updatedBody, { new: true })
    res.status(201).json({
        success: true,
        message: "user updated successfully",
        user
    })
})