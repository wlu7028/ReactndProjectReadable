import { combineReducers } from 'redux'
import {NEW_POST,NEW_COMMENT} from '../actions'

function posts (state={}, action){
    switch(action.type){
        case NEW_POST:
            return {}
        default:
            return state
    }
}

function comments (state={},action){
    switch(action.type){
        case NEW_COMMENT:
            return {}
        default:
            return state
    }
}

export default combineReducers({
    posts,
    comments,
  })