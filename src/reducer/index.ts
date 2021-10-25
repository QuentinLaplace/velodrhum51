import { combineReducers } from 'redux';
import avatarReducer from './reducers/avatar';

const reducers = combineReducers({
    avatar: avatarReducer
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;
