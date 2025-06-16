import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import validator from 'validator'

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: [true, "firstName keno dao nay?"],
        trim: true,
        minlength: [5, "FirstName must be 5 characters, got {VALUE}"],
        maxlength: 10
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "LastName must be 5 characters"],
        maxlength: 10
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Age Must be at least 18, got {VALUE}'],
        max: 60
    },
    email: {
        type: String,
        unique: [true, "Email common hoye geche!!"],
        required: true,
        lowercase: true,
        trim: true,
        // validate: {
        //     validator: function (value) {
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        //         // return false
        //     },
        //     message: function (props) {
        //         return `Email ${props.value} is not valid email`
        //     }
        // }
        validate: [validator.isEmail, "Invalid Email sent {VALUE}"]
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        // enum: ['USER', 'ADMIN', 'SUPERADMIN'],
        enum: {
            values: ['USER', 'ADMIN', 'SUPERADMIN'],
            message: "Role is not valid, got {VALUE} role"
        },
        default: 'USER'
    }
})

export const User = model<IUser>("User", userSchema);