const http = require('http');
const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "./db/todo.json")

console.log('path', path);

console.log(__dirname);

const server = http.createServer((req, res) => {

    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;

    // GET all todos
    if (pathname === '/todos' && req.method == 'GET') {
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
    else if (pathname === '/todos/create-todo' && req.method == 'POST') {
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
    }

    else if (pathname === "/todo" && req.method == 'GET') {
        const title = url.searchParams.get("title");
        console.log(title);
        const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
        const parsedData = JSON.parse(data);

        const todo = parsedData.find((todo) => todo.title == title);

        const stringifiedTodo = JSON.stringify(todo);
        res.writeHead(200, {
            "content-type": "application/json",
        })
        res.end(
            stringifiedTodo
        );
    }

    // Update
    else if (pathname === '/todos/update-todo' && req.method == 'PATCH') {
        const title = url.searchParams.get("title");
        let data = ""

        req.on("data", (chunk) => {
            data = data + chunk
        })

        req.on("end", () => {
            const { description } = JSON.parse(data)

            const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' })

            const parsedAllTodos = JSON.parse(allTodos)

            const todoIndex = parsedAllTodos.findIndex((todo) => todo.title === title)

            parsedAllTodos[todoIndex].description = description;

            fs.writeFileSync(filePath, JSON.stringify(parsedAllTodos, null, 2), { encoding: 'utf-8' });

            res.end(JSON.stringify({ title, description, createdAt: parsedAllTodos[todoIndex].createdAt }, null, 2));
        })
    }

    // Delete
    else if (pathname === '/todos/delete-todo' && req.method == 'DELETE') {

        const title = url.searchParams.get("title");

        const allTodos = fs.readFileSync(filePath, { encoding: 'utf-8' })

        const parsedAllTodos = JSON.parse(allTodos)

        const filteredTodos = parsedAllTodos.filter((todo) => todo.title !== title)

        fs.writeFileSync(filePath, JSON.stringify(filteredTodos, null, 2), { encoding: 'utf-8' });

        res.end(`${title} deleted successfully`);
    }

    else { res.end("Route Not Found") }
})

server.listen(5000, '127.0.0.1', () => {
    console.log("✔ server listing to port 5000");
})

/*
todos - GET - ALL Todo
todos create-todo POST Create Todo
*/