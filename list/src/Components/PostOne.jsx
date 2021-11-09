import '../app.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PostOne(props) {

    const { postId } = useParams();

    if (props.posts.length === 0) {
        return (
            <h1> Loadig...</h1>
        )
    }


    return (
        <div>
            <div className='id'>{props.posts[postId - 1].id}</div>
            <div className="title">{props.posts[postId - 1].title}</div>
            <div className="title">{props.posts[postId - 1].body}</div>
            <Link to={'/'}> <button>Back</button></Link>
        </div>
    );
}


export default PostOne;