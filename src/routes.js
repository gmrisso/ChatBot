import React from 'react';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Chat from "./pages/Chat";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Chat} />
		</Switch>
	</BrowserRouter>
);

export default Routes;