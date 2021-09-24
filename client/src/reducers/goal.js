
export default (goals = [], action) => {
    switch (action.type) {
        case 'FETCH_GOAL':
            return action.payload;
        default:
            return goals;
    }
}