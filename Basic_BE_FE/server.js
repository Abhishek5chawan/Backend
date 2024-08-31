import express from "express";

const app = express()

app.get('/', (req, res) => {
    res.send('server is ready')
})

//get a list of 5 different jokes in array of object each object must contain id, title, content

app.get('/api/jokes', (req, res) => {
    const jokes = [{
        "id": 1,
        "title": "Why did the chicken cross the road?",
        "content": "To get to the other side!"},
        {
        "id": 2,
        "title": "Why did the chicken cross the road?",
        "content": "To get to the other side!"},
        {
        "id": 3,
        "title": "Why did the chicken cross the road?",
        "content": "To get to the other side!"},
        {
        "id": 4,
        "title": "Why did the chicken cross the road?",
        "content": "To get to the other side!"},
        {
        "id": 5,
        "title": "Why did the chicken cross the road?",
        "content": "To get to the other side!"}
    ]
    res.send(jokes)
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`)
})