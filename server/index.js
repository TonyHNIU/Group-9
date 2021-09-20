import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/questionnaire.js'

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/questionnaire', postRoutes);

const CONNECTION_URL = 'mongodb+srv://group9hui:group9hui123@group9.pzxri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false);
