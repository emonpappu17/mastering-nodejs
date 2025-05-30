const http = require('http');
const path = require("path");
const fs = require("fs");
const { json } = require('stream/consumers');

const filePath = path.join(__dirname, "./db/todo.json")

console.log('filePath', filePath);

const server = http.createServer((req, res) => {
    // GET all todos
    if (req.url === '/todos' && req.method == 'GET') {
        const data = fs.readFileSync(filePath, { encoding: 'utf-8' })
        res.writeHead(200, {
            "content-type": "application/json",
        })

        // res.end({
        //     "id": 2025
        // });

        // res.setHeader("content-type", "text/plain");
        // res.setHeader("email", "ph2@gmail.com")
        // res.statusCode = 201;

        // res.end(JSON.stringify(data));
        res.end(
            data
        );
    }

    // POST a todo
    else if (req.url === '/todos/create-todo' && req.method == 'POST') {
        let data = ""

        req.on("data", (chunk) => {
            data = data + chunk
        })

        req.on("end", () => {
            const { title, description } = JSON.parse(data)

            const createdAt = new Date().toLocaleString()

            const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' })

            const parsedAllTodos = JSON.parse(allTodos)

            parsedAllTodos.push({ title, description, createdAt })

            fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), { encoding: 'utf-8' });

            res.end(JSON.stringify({ title, description, createdAt }, null, 2));
        })
    } else { res.end("Route Not Found") }
})

server.listen(5000, '127.0.0.1', () => {
    console.log("✔ server listing to port 5000");
})

/*
todos - GET - ALL Todo
todos create-todo POST Create Todo
*/