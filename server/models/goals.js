import mongoose from 'mongoose'

const goalsSchema = mongoose.Schema({
  goal1: { name: String, veryHigh: String, high: String },
  goal2: { name: String, veryHigh: String, high: String },
  goal3: { name: String, veryHigh: String, high: String },
  goal4: { name: String, veryHigh: String, high: String },
  goal5: { name: String, veryHigh: String, high: String },
  goal6: { name: String, veryHigh: String, high: String },
  goal7: { name: String, veryHigh: String, high: String },
  goal8: { name: String, veryHigh: String, high: String },
  goal9: { name: String, veryHigh: String, high: String },
  goal10: { name: String, veryHigh: String, high: String },
  goal11: { name: String, veryHigh: String, high: String },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const Goal = mongoose.model('Goal', goalsSchema)

export default Goal
