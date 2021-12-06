import React from 'react'
import { ACTIONS } from './reducer'

export default function Todo({ todo, dispatch }) {
    return (
        <div>
            <span style={{color: todo.complete ? '#000' : '#CCC'}}>
                {todo.name}
            </span>
            <button onClick={() => dispatch ({ type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}
            >Toggle</button>
            <button onClick={() => dispatch ({ type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })}
            >Delete</button>
        </div>
    )
}
