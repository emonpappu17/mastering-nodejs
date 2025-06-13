const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema');
const Todo = new mongoose.model("Todo", todoSchema);

// GET ALL THE TODOS
router.get('/', async (req, res) => {
    const result = await Todo.find({ status: "active" }).select({
        _id: 0,
        _v: 0,
        date: 0
    }).limit(2)
    console.log(result);
})

// GET A TODOS bg ID
router.get('/:id', async (req, res) => {
    // const result = await Todo.find({ _id: req.params.id })
    // console.log(result);
    try {
        const data = await Todo.find({ _id: req.params.id });
        res.status(200).json({
            result: data,
            message: "Success"
        })
    } catch (error) {
        res.status(500).json({
            error: "There was a server side error!"
        })
    }
})

// POST A TODO
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    console.log(req.body);
    await newTodo.save(
        //     (err) => {
        //     if (err) {
        //         res.status(500).json({
        //             error: "There was a server side error!"
        //         })
        //     } else {
        //         res.status(200).json({
        //             message: "Todo was inserted successfully!"
        //         })
        //     }
        // }
    )
})

// POST MULTIPLE TODO
router.post('/all', async (req, res) => {
    await Todo.insertMany(req.body
        //      (err) => {
        //     if (err) {

        //     } else {

        //     }
        // }
    )

    const result = await Todo.insertMany(req.body);
    console.log(result);
})

// PUT TODO
router.put('/:id', async (req, res) => {
    // const result = await Todo.updateOne({ _id: req.params.id }, {
    //     $set: {
    //         status: 'inactive',
    //         title: 'hii'
    //     }
    // })
    // console.log(result);

    const result = await Todo.findByIdAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                status: 'inactive',
                title: 'hii mongoose'
            }
        },
        { new: true }
    )
    console.log(result);
})

// DELETE TODO
router.delete('/:id', async (req, res) => {
    const result = await Todo.deleteOne({ _id: req.params.id })
    console.log(result);
})

module.exports = router;


