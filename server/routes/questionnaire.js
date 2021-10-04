import express from 'express'

import { getQuestions, createQuestions } from '../controllers/questionnaire.js'

const router = express.Router()

router.get('/', getQuestions)
router.post('/', createQuestions)

export default router
