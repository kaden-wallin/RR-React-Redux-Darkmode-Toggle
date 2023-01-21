import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { lightMode, darkMode } from './ducks/toggleModeSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const mode = useSelector(state => state.mode)

  return (
    <div style={{ backgroundColor: mode.color1, color: 'black' }} className="App">
      <Nav />
      <button onClick={() => mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())}>{mode.darkMode ? "Light" : "Dark"} Mode</button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
