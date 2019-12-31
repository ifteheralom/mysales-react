import { editItem } from "./actions"
import { getItems } from './actions'

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            let found = state.find((i) => i.id == action.item.id)
            // console.log(found)
            if(found) {
                action.type = 'EDIT'
                action.id = action.item.id
                action.updates = action.item
            } else {
                return [...state, action.item]
            }
        case 'EDIT':
            // console.log('EDIT')
            return state.map((i) => {
                if (i.id == action.id) {
                    return ({
                        ...i, ...action.updates
                    })
                }
                return i
            })
        case 'REMOVE':
            return state.filter((i) => (i.id != action.id))
        case 'RESET':
            return []
        default:
            return state
    }
}