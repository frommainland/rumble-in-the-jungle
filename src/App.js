
import './App.css';
import Comp from './components/AnimalParallax';

import Parallax from './components/AnimalParallax';


function App() {
    return (
        <div className="App">
            <div style={{
                height: '100%',
                width: 1888,
                background: 'red',
                display: 'inline-block'
            }}></div>
            <Parallax />
        </div>
    );
}

export default App;
