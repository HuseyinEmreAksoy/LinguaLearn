import DraggableButton from './components/DraggableButton';
import LogInPage from './pages/LogInPage';
import useScreenSize from './hooks/useScreenSize';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import NoPage from './pages/NoPage';
import * as Constants from './components/Constants';

function App() {
	const screenSize = useScreenSize();
	document.body.style.overflow = "hidden"
	
	return(
		<div className="App" style={{width: screenSize.width, height: screenSize.height}}>
			<BrowserRouter>
				<Routes>
					<Route index element={ <LogInPage></LogInPage> }></Route>
					<Route path={Constants.SignUpPagePath} element={ <SignUpPage></SignUpPage> }></Route>
					<Route path='*' element={ <NoPage></NoPage> }></Route>
				</Routes>
			</BrowserRouter>
	   </div>
	);
}

export default App;
