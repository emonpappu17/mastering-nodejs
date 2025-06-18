import { Model, model, Schema } from "mongoose";
import { IAddress, IUser, UserInstanceMethods, UserStaticMethods } from "../interfaces/user.interface";
import validator from 'validator'
import bcrypt from "bcryptjs";
import { Note } from "./notes.model";


const addressSchema = new Schema<IAddress>(
    {
        city: { type: String },
        street: { type: String },
        zip: { type: Number }
    },
    { _id: false }
)

// const userSchema = new Schema<IUser, Model<IUser>, UserInstanceMethods>(
const userSchema = new Schema<IUser, UserStaticMethods, UserInstanceMethods>(
    {
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
        },
        address: {
            type: addressSchema
        }
    },
    {
        versionKey: false,
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

userSchema.method("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    // this.password = password
    // this.save()
    return password
})

userSchema.static("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10);
    // this.password = password
    // this.save()
    return password
})


// Pre Hooks
// Document Middleware
userSchema.pre("save", async function (next) {
    // console.log('inside pre save hook');
    this.password = await bcrypt.hash(this.password, 10);
    // console.log(this);
    next()
})

// Query middleware
userSchema.pre("find", function (next) {
    console.log('inside pre find hook');
    // console.log(doc);
    next()
})

// userSchema.post("save", function () {
//     console.log('Inside post save');
// })


// Post hook

// Document middleware
// userSchema.post('save', function (doc, next) {
//     console.log(`${doc.email} has been saved`, doc._id);
//     next()
// });

// Query middleware
userSchema.post("findOneAndDelete", async function (doc, next) {
    if (doc) {
        // console.log(doc);
        await Note.deleteMany({ user: doc._id })
    }
    next()
})

userSchema.virtual('fullname').get(function () {
    return `${this.firstName}${this.lastName}`
})

export const User = model<IUser, UserStaticMethods>("User", userSchema);