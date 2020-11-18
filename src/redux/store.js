import { createStore } from 'redux';
import rootReducer from './reducers';
const store = createStore(rootReducer)

export default store;
//store chỉ đơn giản như này thôi
