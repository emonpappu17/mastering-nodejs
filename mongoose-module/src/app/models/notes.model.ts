import { model, Schema } from "mongoose";
import { INotes } from "../interfaces/notes.interface";
import validator from 'validator'


const noteSchema = new Schema<INotes>(
    {
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
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User', // export const User = model<IUser>("User", userSchema); // always model er nam use korte hobe  "User" model er nam
            required: true
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

export const Note = model<INotes>('Note', noteSchema);


