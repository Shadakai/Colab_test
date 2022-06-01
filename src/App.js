import logo from './logo.svg'
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import IntroImage from './components/introImage.js';
import Text from './components/text.js';
import Snfodjfnodsnf from './components/body.js';
import './App.css';

function App() {

  return (
    <div className="App">

        <Header numberOne={9} numberTwo={3} css="red"/>

        <Header numberOne={120} numberTwo={3} css="yellow"/>

        <Header numberOne={9999} numberTwo={3123123} css="aqua"/>

        <Header numberOne={0.5} numberTwo={0.1} css="blue"/>

    </div>
  );
}

export default App;
