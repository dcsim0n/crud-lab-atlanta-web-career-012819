
import cuid from 'cuid';
import C from '../constants'

const initialState = []
export default (state = initialState, action) => {
    switch (action.type) {
        case C.ADD_RESTAURANT:
            const newRest = {
                text: action.text,
                id: cuid()
            }
            console.log(newRest)
            return [...state, newRest]
        default:
            return state
    }
}
