import LogInPage from './pages/LogInPage';
import GrammarPage from './pages/GrammarPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import NoPage from './pages/NoPage';
import SpeechToText from './pages/SpeechToText';
import * as routePaths from './constants/routePaths';
import VocabularyPage from './pages/VocabularyPage';
function App() {
	document.body.style.overflow = "clip"
	
	return(
		<div className="App">
				<Routes>
					<Route index element={ <LogInPage/>}></Route>
					<Route path={routePaths.SignUp_PAGE_PATH} element={ <SignUpPage/>}></Route>
					<Route path='*' element={ <NoPage/> }></Route>
					<Route path={routePaths.SpeechToText_PAGE_PATH} element={<SpeechToText />} />
					<Route path={routePaths.GRAMMAR_PAGE_PATH} element={<GrammarPage/>}></Route>
					<Route path={routePaths.VOCABULARY_PAGE_PATH} element={<VocabularyPage/>}></Route>
				</Routes>
	   </div>
	);
}

export default App;
