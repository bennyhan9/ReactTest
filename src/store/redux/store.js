const redux = require('redux');
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const store = redux.createStore(reducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

store.subscribe(counterSubscriber);