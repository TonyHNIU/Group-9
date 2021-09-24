import QuestionnaireContent from '../models/questionnaireContent.js'

export const getQuestions = async (req, res) => {
    try {
        const getQuestions = await QuestionnaireContent.find();

        res.status(200).json(getQuestions);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const createQuestions = async (req, res) => {
    const post = req.body;

    const newPost = new QuestionnaireContent(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}