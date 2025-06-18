import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";
import { User } from "../models/user.model";
import { z } from "zod";
import bcrypt from "bcryptjs";

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
        const body = req.body
        // const zodBody = await CreateUserZodSchema.parseAsync(req.body)

        // const password = await bcrypt.hash(body.password, 10)
        // body.password = password;
        // const user = await User.create(body); // static method

        // Built in and custom instance methods
        //  const user = new User(body)
        //  const password = await user.hashPassword(body.password) //custom instance methods
        //  user.password = password
        //  await user.save() // instance method

        // Built in and custom static methods // most of the time this will be used
        // const password = await User.hashPassword(body.password) // static method
        // body.password = password
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
    const userEmail = req.query.email ? req.query.email : ""
    let users = []

    // Filtering
    // if (userEmail) {
    //     users = await User.find({ email: userEmail });
    // } else {
    //     users = await User.find();
    // }

    // Sorting
    // users = await User.find().sort({ "email": 'asc' });
    // users = await User.find().sort({ "email": 'desc' });
    // users = await User.find().sort({ "email": 1 });
    // users = await User.find().sort({ "email": -1 });

    // Skipping
    // users = await User.find().skip(5)

    // Limiting
    users = await User.find().limit(2)

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
    // const user = await User.findByIdAndDelete(userId)
    const user = await User.findOneAndDelete({ _id: userId })
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