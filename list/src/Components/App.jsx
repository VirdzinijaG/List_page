import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Posts from './Posts';
import PostOne from './PostOne';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setPosts(response.data);
            })
    }, []);


    return (
        <>
            <h1>Posts List</h1>
            <Router>
                <Switch>
                    <Route path={'/:postId'}>
                        <PostOne posts={posts}></PostOne>
                    </Route>
                    <Route path='/'>
                        {posts.map((post) => (<Posts key={post.id} data={post}></Posts>))}
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;