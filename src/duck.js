import {createReducer} from './dorothy/utils'
export const UPDATE_COUNT = 'UPDATE_COUNT'

const initCount = 0;
const countActionHandler = {
    [UPDATE_COUNT]: (state, action) => action.payload,
    // more action
}

export const countReducer = createReducer(initCount, countActionHandler)    