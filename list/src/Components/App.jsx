import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Posts from './Posts';
import PostOne from './PostOne';
import NewPost from './NewPost';
import '../app.css';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                setPosts(response.data);
            })
    }, []);

    const Add = (data) => {
        axios.post('https://jsonplaceholder.typicode.com/posts/', data)
            .then(function (response) {
                console.log(response);
            })
    }



    return (
        <>
            <h1>Posts List</h1>
            <a href="/newPost" className="new" style={{ textDecoration: 'none' }}>New post</a>
            <Router>
                <Switch>
                    <Route path={'/newPost'}>
                        <NewPost posts={posts} add={Add}></NewPost>
                    </Route>
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