import LogInPage from './pages/LogInPage';
import useScreenSize from './hooks/useScreenSize';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import NoPage from './pages/NoPage';
import SpeechToText from './pages/SpeechToText';
import * as routePaths from './constants/routePaths';
function App() {
	const screenSize = useScreenSize();
	document.body.style.overflow = "hidden"
	
	return(
		<div className="App" style={{width: screenSize.width, height: screenSize.height}}>
				<Routes>
					<Route index element={ <LogInPage/>}></Route>
					<Route path={routePaths.SignUp_PAGE_PATH} element={ <SignUpPage/>}></Route>
					<Route path='*' element={ <NoPage/> }></Route>
					<Route path={routePaths.SpeechToText_PAGE_PATH} element={<SpeechToText />} />
				</Routes>
	   </div>
	);
}

export default App;
