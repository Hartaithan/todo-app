import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;
