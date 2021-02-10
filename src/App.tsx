import React from 'react';
import Header from './core/components/Header/Header';
import TodoPage from './pages/Todo/TodoPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/Details/DetailsPage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route component={TodoPage} path="/" exact />
				<Route component={DetailsPage} path="/details" />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
