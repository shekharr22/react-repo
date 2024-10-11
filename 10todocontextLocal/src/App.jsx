import { useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";

function App() {
 const [todos, setTodos] = useState([])
 
 const addTodo = (todo) => { 
  setTodos((prev) => [{id: Date.now()}, ...prev] ) 
 }

 const updatedTodo = (id, todo) => {
  
 }

  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
        <h1 className="mt-2 mb-8 text-2xl font-bold text-center">
          Manage Your Todos
        </h1>
        <div className="mb-4">{/* Todo form goes here */}</div>
        <div className="flex flex-wrap gap-y-3">
          {/*Loop and Add TodoItem here */}
        </div>
      </div>
    </div>
    </TodoProvider>
  );
}

export default App;
