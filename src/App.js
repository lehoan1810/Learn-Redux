import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={ProductListing} />
					<Route path="/product/:productId" exact component={ProductDetail} />
					<Route>404 Found</Route>
				</Switch>
			</Router>
		</div>
	);
}
export default App;
