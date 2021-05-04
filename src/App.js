import React, {useState} from 'react';
import './App.css';
import Button from "@material-ui/core/Button";

import ChallengeCard from "./Components/Common/ChallengeCard";

export const MAIN = 'Main';
export const ENGLISH = 'English';
export const MATH = 'Math';

function App() {
    const [screen, setScreen] = useState(MAIN)

    const mathHandler = () => {
        setScreen(MATH);
    }

    const englishHandler = () => {
        setScreen(ENGLISH);
    }

    const backHandler = () => {
        setScreen(MAIN);
    }

    switch (screen) {
        case ENGLISH:
        case MATH:
            return <div className="App"><ChallengeCard type={screen} onBack={backHandler}/></div>
        default:
            return (
                <div className="App">
                    <h2>What do you want to train?</h2>
                    <Button variant="contained" color="primary"
                            onClick={mathHandler}>
                        Math
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary"
                            onClick={englishHandler}>
                        English
                    </Button>
                </div>
            )
    }

}

export default App;
