import '../app.css';
import { Link } from 'react-router-dom';

function Posts(props) {

    return (
        <>
            <div>
                <table className="table">
                    <Link style={{ textDecoration: 'none' }} to={'/' + props.data.id}><tr className="vidus">
                        <td className='id'>{props.data.id}</td>
                        <td className="title">{props.data.title}</td>
                        <td className="body">{props.data.body}</td>
                    </tr></Link>
                </table>
            </div>
        </>
    );
}


export default Posts;