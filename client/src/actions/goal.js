import * as api from '../api/goal'

export const getGoals = () => async (dispatch) => {
    try {
        const { data } = await api.fetchGoals();
        dispatch({ type: 'FETCH_GOAL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}