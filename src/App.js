import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LeftCont from './components/Leftcont/LeftCont';
import Navside from './components/NavSide/Navside';
import Side from './components/NavSide/Side';
import Middlecontnav from './components/MiddleCont/Middlecontnav';
import MiddleCont from './components/MiddleCont/MiddleCont';
import Home from './components/Home';

function App() {
  return (
   <>
   <div className='app'>
   <Navbar/>
   <Home/>
   </div>
   </>
  );
}

export default App;
