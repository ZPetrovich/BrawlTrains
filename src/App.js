import React, {useState} from 'react';
import './App.css';
import Button from "@material-ui/core/Button";

import ChallengeCard from "./Components/Common/ChallengeCard";

export const MAIN = 'Main';

export const ENGLISH = 'English';
export const ENGLISH_S_OR_NOT = 'EnglishSorNot';
export const ENGLISH_4_FORMS = 'English4Forms';

export const MATH = 'Math';
export const MATH_PLUS_MINUS = 'MathPlusMinus';
export const MATH_MUL_DIV = 'MathMulDiv';

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

    const onChoiceHandler = (screenParam) => {
        console.log('onChoiceHandler', onChoiceHandler);
        setScreen(screenParam);
    }

    switch (screen) {
        case ENGLISH:
        case ENGLISH_S_OR_NOT:
        case ENGLISH_4_FORMS:
        case MATH_PLUS_MINUS:
        case MATH_MUL_DIV:
        case MATH:
            return <div className="App"><ChallengeCard type={screen} onBack={backHandler} onChoice={onChoiceHandler}/></div>
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
