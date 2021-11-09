import { Link } from 'react-router-dom';

function NewPost() {

    return (
        <div>
           <Link to={'/'}> <button>Back</button></Link>
        </div>
    );
}


export default NewPost;