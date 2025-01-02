import { combineReducers } from 'redux'
import user from './user';
import movie from './movie';

const rootReducer = combineReducers({
  movie,
  user
})

export default rootReducer;