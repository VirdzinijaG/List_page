import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            setPosts(response.data);
        });
    }, []);


    return (
        <>
            {posts.map((post) => (<Post key={post.id} data={post} />))}
        </>
    )
}

export default App;