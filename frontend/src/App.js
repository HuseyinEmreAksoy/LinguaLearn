import DraggableButton from './components/DraggableButton';
import LogInPage from './components/LogInPage';
import useScreenSize from './hooks/useScreenSize';

function App() {
	const screenSize = useScreenSize();
	document.body.style.overflow = "hidden"

	// return (
	// 	<div className="App" style={{width: screenSize.width, height: screenSize.height}}>
	//   		<DraggableButton screenSize={screenSize}></DraggableButton>
	//  </div>
	// );
	return(
		<div className="App" style={{width: screenSize.width, height: screenSize.height}}>
	    	<LogInPage></LogInPage>
	   </div>
	);
}

export default App;
