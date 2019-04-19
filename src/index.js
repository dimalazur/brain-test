import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import AppRedux from './AppRedux';
import rootReducer from './reducers/reducers';

export const store = createStore(
  rootReducer
);


ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById('root'),
);


/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContext from './AppContext';

ReactDOM.render(
	<AppContext />,
  document.getElementById('root'),
);*/