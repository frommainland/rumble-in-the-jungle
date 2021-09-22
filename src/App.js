import "./App.css";
import "./modern-normalize.css";
import Prologue from "./components/Prologue";

import Parallax from "./components/AnimalParallax";

function App() {
    return (
        <div className="App">
            <Parallax />
            <Prologue />
        </div>
    );
}

export default App;
