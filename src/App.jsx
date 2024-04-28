import { useState, useEffect } from 'react'
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

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos(todo) {
    const newTodos = [...todos, todo]
    setTodos(newTodos)
    persistData(newTodos)
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodos)
    persistData(newTodos)
  }

  function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
    }

    useEffect(() => {
      if (!localStorage) {
        return
      }
      let localTodos = localStorage.getItem('todos')
      if (!localTodos) {
        return
      }
      localTodos = JSON.parse(localTodos).todos
      console.log(localStorage.getItem('todos'))
      // console.log(JSON.parse(localTodos).todos)
      setTodos(localTodos)  
    }, [])

  return (
    <>
      <ToDoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <ToDoList todoValue={todoValue} todos={todos} handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo}/>
    </>
  )
}

export default App
