import './app.css'
import { Link } from 'react-router-dom';

function Todo(props) {

    return (
        <div>
            <table className="table">
                <tr className="head">
                    <th className="headId">ID</th>
                    <th className="headTitle">Title</th>
                    <th className="headBody">Body</th>
                </tr>
                <Link to={'/' + props.data.id}><tr className="vidus">
                    <td className='id'>{props.data.id}</td>
                    <td className="title">{props.data.title}</td>
                    <td className="body">{props.data.body}</td>
                </tr></Link>
            </table>
        </div>
    );
}


export default Todo;