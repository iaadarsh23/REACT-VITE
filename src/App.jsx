import "./App.css";
import MyFooter from "./components/Footer";
import MyHeader from "./components/Header";

import Mypage from "./components/Page";
import MyNav from "./components/Nav";

function App() {
	return (
		<>
			<MyHeader />
			<Mypage />
			<MyNav />
			<MyFooter />
		</>
	);
}

export default App;
