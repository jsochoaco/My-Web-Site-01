import {IDIOMA} from "./action-types"

const initialState = {
    idioma: "ES"
}
export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case IDIOMA : {
            return {
                ...state,
                idioma: action.payload
            }
        }
        default:
            return {
                ...state
            }
    }
}
export default reducer