import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

let server: Server;
const PORT = 5000;

async function main() {
    try {
        await mongoose.connect('mongodb+srv://todoapp:todoapp@cluster0.aezqr.mongodb.net/advanced-note-app?retryWrites=true&w=majority&appName=Cluster0');  // here database name advanced-note-app
        console.log('Connected to MongoDB using Mongoose');
        server = app.listen(PORT, () => {
            console.log(`App listening on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

main();