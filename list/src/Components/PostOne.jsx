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
        <div className="post">
            <div className="postId">{props.posts[postId - 1].id} post details</div>
            <span>Title</span>
            <div className="postTitle">{props.posts[postId - 1].title}</div>
            <span>Body</span>
            <div className="postBody">{props.posts[postId - 1].body}</div>
            <Link to={'/'}> <button>Back</button></Link>
        </div>
    );
}


export default PostOne;