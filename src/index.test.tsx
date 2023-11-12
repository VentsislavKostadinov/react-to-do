import React, { StrictMode } from 'react'
import { App } from './App'
import { createRoot } from 'react-dom/client'

describe('index.tsx', () => {
    let mockRoot: HTMLElement

    beforeEach(() => {
        mockRoot = document.createElement('div')
        mockRoot.setAttribute('id', 'root')
        document.body.appendChild(mockRoot)
    })

    afterEach(() => {
        document.body.removeChild(mockRoot)
    })

    it('renders the App component inside in index.tsx StrictMode file', () => {
        const app = mockRoot
        const root = createRoot(app!)
        require('./index.tsx')

        root.render(
            <StrictMode>
                <App />
            </StrictMode>,
        )
    })
})
