const redux = require('redux');
import reducer from './reducer';

export const store = redux.createStore(reducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);