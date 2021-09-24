import axios from 'axios'

const url = 'http://localhost:5000/goals';

export const fetchGoals = () => axios.get(url);