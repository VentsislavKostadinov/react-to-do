import React from 'react'
import './App.scss'
import { AppButton } from './common/Button'

function App() {
    return (
        <div className="App">
            <AppButton
                dataTestid="primary"
                className="primary"
                variant="primary"
                text="Primary"
            />
            <AppButton
                dataTestid="secondary"
                className="secondary"
                variant="secondary"
                text="Secondary"
            />
        </div>
    )
}

export default App
