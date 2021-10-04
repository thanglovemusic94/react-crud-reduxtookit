import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware)),


)
