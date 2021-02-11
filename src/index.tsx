import React from 'react';
import ReactDOM from 'react-dom';
import './core/styles/index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './core/redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
