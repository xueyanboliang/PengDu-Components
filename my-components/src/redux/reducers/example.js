let defaultState = {
    exm: '我只是一个栗子'
}
const examleData = (state = defaultState, action = {}) => {
    switch(action.type) {
        case 'EXAMPLE':
        return {exm: action.exm}
        default:
        return state
    }
}

export default examleData