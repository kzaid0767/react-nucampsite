import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes'

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;     //updating the state in response to the action being dispatched
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);       //not using push coz don't want to mutate original array
        default:
            return state;
    }
}