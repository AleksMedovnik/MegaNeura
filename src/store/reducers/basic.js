import { CHECK_RESULT } from '../actionTypes/basic'
import levels from '../data/basic'

let level = 0

const initialState = {
    level: level,
    theory: levels[level].description,
    form: levels[level].inputField,
    canvas: levels[level].canvasStart,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_RESULT:
            if (action.value === levels[level].successResult) {
                return {
                    ...state,
                    theory: levels[level].successPage,
                    form: levels[level].next,
                    canvas: levels[level].canvasEnd,
                }
            }
            return {
                ...state,
                theory: levels[level].errorPage
            }
        default:
            return state
    }
}

export default reducer