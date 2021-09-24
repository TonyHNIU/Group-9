import GoalsContent from '../models/goals.js'

export const getGoals = async (req, res) => {
  try {
    const getGoals = await GoalsContent.find()

    res.status(200).json(getGoals)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
