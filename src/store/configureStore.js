import {applyMiddleware, compose, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "../reducers";
import thunk from 'redux-thunk';

export const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    let persistor = persistStore(store);
    return {store, persistor}
}

