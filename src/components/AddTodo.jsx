import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/TodoSlice';

function AddField() {
    const [input, setInput] = useState('')

    const dispatchTodo = useDispatch()

    function addTodoItem(todo) {
        if (todo === '') return
        else {
            dispatchTodo(addTodo(todo))
            setInput('')
        }
    }

    function keyDownFunc(e) {
        let key = e.key
        if (key === 'Enter') {
            if (input === '') return
            else {
                dispatchTodo(addTodo(input))
                setInput('')
            }
        }
    }
    return (
        <>
            <div className='w-[40vw] h-16 my-4 flex justify-center items-center'>
                <input type="text"
                    onKeyDown={keyDownFunc}
                    className='h-12 w-[30vw] border-[1px] rounded-l-lg outline-none border-gray-500 shadow-sm px-3 text-lg'
                    placeholder='Write Todos Here...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <p className='h-12 w-20 flex justify-center items-center rounded-r-lg text-white bg-blue-500 font-bold cursor-pointer hover:bg-blue-700'
                    onClick={() => addTodoItem(input)}
                >Add</p>
            </div>
        </>
    )
}

export default AddField