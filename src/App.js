import React from 'react';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import Footer from './components/layout/footer/Footer';
import Context from './Context';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<Context>
			<Header />
			<Main />
			<Footer />
			<ToastContainer />
		</Context>
	)
}

export default App;
