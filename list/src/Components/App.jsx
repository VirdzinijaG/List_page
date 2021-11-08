import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Todo1 from './Todo1';
import TodoOne from './TodoOne';

function App() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setTodos(response.data);
            })
    }, []);


    return (
        <Router>
            <Switch>
                <Route path={'/:todoId'}>
                    <div className="todo-container">
                        <TodoOne todos={todos} ></TodoOne>
                    </div>
                </Route>
                <Route path='/'>
                    <div className="todo-container">
                        {todos.map((todo) => (<Todo1 key={todo.id} data={todo} ></Todo1>))}
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;