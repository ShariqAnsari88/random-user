import React from 'react';
import './App.css';

import ClassComp from './components/ClassComp';
import FunctionalComp from './components/FunctionalComp';

function App() {
    return (
        <div className="App">
            <FunctionalComp />

            {/* Same code with class componenet */}
            {/* <ClassComp /> */} 
        </div>
    );
}

export default App;
