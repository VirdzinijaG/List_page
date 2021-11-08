import { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setPosts(response.data);
        });
    }, []);

    useEffect((id) => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + id).then((response) => {
            setPosts(response.data[0]);
        });
    }, []);



    return (
        <>
            {posts.map((post) => (<Posts key={post.id} data={post} />))}
        </>
    )
}

export default App;