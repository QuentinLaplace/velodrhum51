import { combineReducers } from 'redux';
import drawerReducer from './reducers/drawer';

const reducers = combineReducers({
    drawer: drawerReducer
});

export default reducers;
//This RootState is required to use useSelector later on 
export type RootState = ReturnType<typeof reducers>;
