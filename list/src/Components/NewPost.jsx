import { Link } from 'react-router-dom';
import { useState } from "react";

function NewPost({ add }) {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const controller = (e, i) => {
        if ("title" === i) {
            setTitle(e.target.value);
        } else if ("body" === i) {
            setBody(e.target.value);
        }
    };

    const Add = () => {
        const data = {
            title: title,
            body: body,
        };
        setTitle("");
        setBody("");
        add(data);
    };

    return (
        <div className="newPost">
            <div className="newTitle">Title</div>
            <input style={{width:"50%"}} type="text" onChange={(e) => controller(e, 'title')} value={title} />
            <div className="newBody">Body</div>
            <textarea style={{width:"50%", height:"100px", resize:"none", marginBottom:"15px"}}  onChange={(e) => controller(e, 'body')} value={body}></textarea>
            <button className="add" onClick={Add}> Add post</button>
            <Link to={'/'}> <button>Back</button></Link>
        </div>
    );
}


export default NewPost;