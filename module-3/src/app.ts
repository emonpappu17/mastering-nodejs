import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.get('/', (req: Request, res: Response) => {
    console.log({ req, res });
    res.send('i am learning express and you')
})
app.get('/todos', (req: Request, res: Response) => {
    res.send('Hello World!')
})
app.post('/todos/create-todo', (req: Request, res: Response) => {
    res.send('Hello World!')
})

export default app;

/*
Basic File structure

server -> server handling like - starting, closing error handling to server. only related to server

app file -> routing handle, middleware, route related error

app folder -> app business logic handling like create read update delete, database related works
*/