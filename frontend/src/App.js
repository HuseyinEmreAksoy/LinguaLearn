import LogInPage from './pages/LogInPage';
import GrammarPage from './pages/GrammarPage'
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import NoPage from './pages/NoPage';
import SpeechToText from './pages/SpeechToText';
import * as routes from './constants/routePaths';
import VocabularyPage from './pages/VocabularyPage';
import ReadingPage from './pages/ReadingPage';
import ListeningPage from './pages/ListeningPage';
function App() {
		
	document.body.style.overflow = "hidden"

	return(
		<div className="App">
				<Routes>
					<Route index element={ <LogInPage/>}></Route>
					<Route path={routes.SignUp_PAGE_PATH} element={ <SignUpPage/>}></Route>
					<Route path='*' element={ <NoPage/> }></Route>
					<Route path={routes.SPEAKING_PAGE_PATH} element={<SpeechToText />} />
					<Route path={routes.GRAMMAR_PAGE_PATH} element={<GrammarPage/>}></Route>
					<Route path={routes.VOCABULARY_PAGE_PATH} element={<VocabularyPage/>}></Route>
					<Route path={routes.READING_PAGE_PATH} element={<ReadingPage/>}></Route>
					<Route path={routes.LISTENING_PAGE_PATH} element={<ListeningPage/>}></Route>
				</Routes>
	   </div>
	);
}

export default App;
