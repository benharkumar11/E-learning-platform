import dotenv from 'dotenv'
import express from 'express'

dotenv.config() // Load .env variables

const app = express()

app.use(express.json())

// Test route to check if .env is working
app.get('/', (req, res) => {
  res.send(`Server is running on port ${process.env.PORT}`)
})

const PORT = process.env.PORT || 5050
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
