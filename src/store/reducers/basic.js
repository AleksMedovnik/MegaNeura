import levels from '../data/basicEn'

let level = 1

const initialState = {
    level: level,
    data: levels[level - 1]
}

const reducer = (state=initialState, action) => {
    return state
}

export default reducer