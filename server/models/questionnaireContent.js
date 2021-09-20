import mongoose from 'mongoose'

const questionnaireSchema = mongoose.Schema({
    question1: String,
    question2: String,
    question3: String,
    question4: String,
    question5: String,
    question6: String,
    question7: String,
    question8: String,
    question9: String,
    question10: String,
    question11: String,
    question12: String,
    question13: String,
    question14: String,
    question15: String,
    question151: String,
    question16: String,
    question17: String,
    question18: String,
    question181: String,
    question182: String,
    question183: String,
    question184: String,
    question185: String,
    question19: String,
    question20: String,
    question21: String,
    question22: String,
    question23: String,
    question24: String,
    question25: String,
    question251: String,
    question26: String,
    question27: String,
    question271: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const QuestionnaireContent = mongoose.model('QuestionnaireContent', questionnaireSchema);

export default QuestionnaireContent;