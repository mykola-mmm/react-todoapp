import React from 'react'
import ToDoCard from './ToDoCard'

// function EditIcon() {
//     return <i className="fa-solid fa-pen-to-square"></i>
// }

export default function ToDoList(props) {

    const { todos } = props

    return (
        <ul className='main'>
            {
                todos && todos.length > 0
                    ? todos.map((todo, index) => {
                        return (
                            <ToDoCard {...props} key={index} index={index}>
                                <p>{todo}</p>
                            </ToDoCard>
                        )
                    })
                    : null
            }
        </ul>
    )
}
