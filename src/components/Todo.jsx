import React, { useState } from 'react'

export default function Todo() {

    const [name, setName] = useState('');
    const [fruits, setFruits] = useState([])

    const changeValue = (event) => {
        setName(event.target.value)
    }

    const addFruit = () => {
        setFruits([...fruits, name])
        setName("")
    }


    return (
        <>
            <input type="text" value={name} onChange={changeValue} />
            <button onClick={addFruit}>Ajouter</button>

            <ul>
                {
                    fruits.map((fruit, key) => {
                        return <li key={key}>{fruit}</li>
                    })
                }
            </ul>
        </>
    )
}
