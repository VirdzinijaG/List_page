import './app.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TodoOne(props) {

    const { todoId } = useParams();

    if (props.todos.length === 0) {
        return (
            <h1> Loadig...</h1>
        )
    }


    return (
        <div className="todo">
            <div className='id'>{props.todos[todoId - 1].id}</div>
            <div className="title">{props.todos[todoId - 1].title}</div>
            <div className="title">{props.todos[todoId - 1].body}</div>
            <Link to={'/'}> <button>Back</button></Link>
        </div>
    );
}


export default TodoOne;