import React, { useState, useEffect } from 'react'

const Convert = ({ language, text }) => {

    useEffect(() => {
        console.log('new prop')
    }, [language, text])

    return (
        <div>Convert</div>
    )
}

export default Convert