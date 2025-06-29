import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";
import bcrypt from "bcryptjs";

export const notesRoutes = express.Router()

notesRoutes.post('/create-note', async (req: Request, res: Response) => {
    const body = req.body
   

    // Approach - 1 of creating a data
    // const myNote = new Note({
    //     title: 'Learning Express',
    //     // tags: {
    //     //     label: "database"
    //     // }
    //     // content: "I am learning Mongoose",
    //     // publishDate: "Hello World"
    // })

    // await myNote.save();

    // Approach - 2
    const note = await Note.create(body);

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})

notesRoutes.get('/', async (req: Request, res: Response) => {
    const notes = await Note.find().populate('user');
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        notes
    })
})

notesRoutes.get('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    // const note = await Note.findById(noteId);
    // const note = await Note.findOne({ _id: noteId });
    const note = await Note.findOne({ title: "Learning Express" });
    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note
    })
})

notesRoutes.delete('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId

    const note = await Note.findByIdAndDelete(noteId)

    // const note1 = await Note.findOneAndDelete({ _id: noteId })

    // const note2 = await Note.deleteOne({ _id: noteId })

    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        note
    })
})

notesRoutes.patch('/:noteId', async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const updatedBody = req.body;

    // const note = await Note.findByIdAndUpdate(noteId, updatedBody, { new: true })

    const note = await Note.findOneAndUpdate({ _id: noteId }, updatedBody, { new: true })

    // const note = await Note.updateOne({ _id: noteId }, updatedBody, { new: true })

    res.status(201).json({
        success: true,
        message: "Note updated successfully",
        note
    })
})