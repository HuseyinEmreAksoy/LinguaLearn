import DraggableButton from './components/DraggableButton';
import LogInPage from './components/LogInPage';
import SpeechToText from './Pages/SpeechToText';

import useScreenSize from './hooks/useScreenSize';
import {
	Routes,
	Route,
  } from 'react-router-dom';
  import {
	HOME_PAGE_PATH, READ_PAGE_PATH, LS_PAGE_PATH, SpeechToText_PAGE_PATH
  } from './constants/routePaths';

function App() {


	// return (
	// 	<div className="App" style={{width: screenSize.width, height: screenSize.height}}>
	//   		<DraggableButton screenSize={screenSize}></DraggableButton>
	//  </div>
	// );
	return(
		<Routes>
			<Route path={HOME_PAGE_PATH} element={<LogInPage />} />
			<Route path={SpeechToText_PAGE_PATH} element={<SpeechToText />} />

		</Routes>
	);
}

export default App;
