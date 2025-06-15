import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';

const app: Application = express();

const noteSchema = new Schema({
    title: {
        type: String, required: true, trim: true
    },
    content: { type: String, default: '' },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned: {
        type: Boolean,
        default: false
    },
    tags: {
        label: { type: String, required: true },
        color: { type: String, default: 'gray' }
    }
    // publishDate: Number
})

const Note = model('Note', noteSchema);

app.post('/create-note', async (req: Request, res: Response) => {
    // res.send("Welcome to note app")
    const myNote = new Note({
        title: 'Learning Express',
        tags: {
            label: "database"
        }
        // content: "I am learning Mongoose",
        // publishDate: "Hello World"
    })

    await myNote.save();

    res.status(201).json({
        success: true,
        message: "Note created successfully",
        note: myNote
    })
})

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to note app")
})

export default app;