import './style.css';

import Table from "./components/Table";
import { addTodo, delTodo, getAllTodos, getOneTodo, updateTodoStatus } from './services/services';
import { useEffect, useState } from 'react';
import AddNewTask from './components/AddNewTask';



function App() {

  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');


  useEffect(() => {
    getAllTodos()
      .then(result => {
        setTodos(result);
      })

  }, [])


  const changeStatus = (todoId) => {
    getOneTodo(todoId)
      .then(todo => {
        const data = {
          _id: todo._id,
          text: todo.text,
          isCompleted: !todo.isCompleted
        };
        updateTodoStatus(todoId, data)
          .then(() => {
            setTodos(state => {
              const updatedTodos = state.map(todo => {
                if (todo._id === todoId) {
                  return { ...todo, isCompleted: !todo.isCompleted };
                }
                return todo;
              });
              return updatedTodos;
            })
          })
      })
  }


  const deleteTodo = (todoId) => {
    delTodo(todoId)
      .then(() => {
        setTodos(state => state.filter(todo => todo._id !== todoId))

      })
  }



  const addNewTodo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newTodo = formData.get('new-to-do');

    addTodo(newTodo)
      .then((todo) => {
        setTodos(state => [todo, ...state]);
        setNewTask('');
      })
  }

  const onChangeHandler = (e) => {
    setNewTask(e.target.value);
  };


  return (
    <div className="App">

      <h1 className="to-do-list-h1">To Do List</h1>
      <AddNewTask addNewTodo={addNewTodo} onChangeHandler={onChangeHandler} newTask={newTask}/>
      <Table todos={todos} changeStatus={changeStatus} deleteTodo={deleteTodo} />


    </div>
  );
}

export default App;
