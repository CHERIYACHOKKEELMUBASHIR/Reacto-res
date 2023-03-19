import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {restaurantListReducer} from './reducer/RestoReducer'

const reducer = combineReducers({

    restaurantReducer:restaurantListReducer

})
const middleware = [thunk]


const Store = createStore(reducer,applyMiddleware(...middleware))


export default Store

