import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send('Server is ready')
})

// app.use(express.static('dist'))
app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            "id": 1,
            "title": "Why don't scientists trust atoms?",
            "joke": "Because they make up everything!"
        },
        {
            "id": 2,
            "title": "What do you get if you cross a snowman and a vampire?",
            "joke": "Frostbite."
        },
        {
            "id": 3,
            "title": "Why did the scarecrow win an award?",
            "joke": "Because he was outstanding in his field!"
        },
        {
            "id": 4,
            "title": "Why don't skeletons fight each other?",
            "joke": "They don't have the guts."
        },
        {
            "id": 5,
            "title": "What do you call fake spaghetti?",
            "joke": "An impasta."
        }
]
    res.send(jokes)
})

const port = process.env.port || 3000

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`)
})
