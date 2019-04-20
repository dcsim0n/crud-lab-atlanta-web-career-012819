import C from '../constants';
import cuid from 'cuid';

export default (state = [], action) => {
    switch (action.type) {
        case C.ADD_REVIEW:
            const newReview = {
                id: cuid,
                restaurantId: action.id,
                text: action.content
            }
            return [...state, newReview]
        case C.REMOVE_REVIEW:
            console.log("Removing...")
            return state
        default:
            return state
    }
}