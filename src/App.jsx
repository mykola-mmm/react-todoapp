import { useState } from 'react'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'

function App() {

  let _todos = [
    'todo1',
    'todo2',
    'todo3',
  ]

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(todo) {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodos)
  }

  function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
    }


  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <ToDoList todoValue={todoValue} todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
