import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'

const items = [
    {
        title: 'What is React ?',
        content: 'React is a front end javascript frameword'
    },
    {
        title: 'Why use React ?',
        content: 'React is a favorite JS library'
    },
    {
        title: 'How do you use React ?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade Of Blue',
        value: 'blue'
    }
]

const App = () => {

    return (
        <div>
            <Translate />
        </div>
    )
}

export default App