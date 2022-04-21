import * as ActionTypes from './ActionTypes'; //* wild imports all named exports from ActionTypes

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,         //ES allows campsiteId, because name and property are the same
        rating: rating,                 // rating,
        author: author,
        text: text
    }
});