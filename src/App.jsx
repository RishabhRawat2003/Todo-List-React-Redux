import { useDispatch, useSelector } from "react-redux"
import AddField from "./components/AddTodo"
import { addTodo, removeTodos } from "./store/TodoSlice";
import { useEffect } from "react";
import './BrowserAppearnce.css'
function App() {

  let data = useSelector((State) => State.todos)

  const dispatchTodos = useDispatch()

  function removeTodo(index) {
    dispatchTodos(removeTodos(index))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length >= 1) {
      todos.map((items)=>(
        dispatchTodos(addTodo(items))
      ))
    }
    else return
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(data))

  }, [data])

  return (
    <>
      <div className="w-full h-screen flex flex-col items-center pt-40 bg-slate-800">
        <div className="todoContainer h-[70vh] w-[50vw] border-gray-600 rounded-lg border-[1px] shadow-xl shadow-gray-900 flex flex-col justify-center items-center overflow-y-scroll">
          <h1 className="text-white text-3xl font-bold">Todo List</h1>
          <AddField />
          <div className="todoItems w-[30vw] h-60 overflow-scroll gap-2 my-4 flex flex-col px-4">
            {
              data && data.length >= 1 ?
                data.map((items, i) => (
                  <div key={i} className="w-full text-lg bg-slate-600 rounded-xl py-2 text-white font-bold flex justify-between px-4">
                    {items}
                    <span className='p-0.5 rounded-xl px-2.5 cursor-pointer bg-blue-500 text-white font-bold'
                      onClick={() => removeTodo(i)} >
                      X
                    </span>
                  </div>
                ))
                : null
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
