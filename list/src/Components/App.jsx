import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Posts from './Posts';
import PostOne from './PostOne';
import NewPost from './NewPost';
import '../app.css';
import { Link } from 'react-router-dom';


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
                console.log(response.data);
            })
    }



    return (
        <>
            <Router>
                <Switch>
                    <Route path={'/newPost'}>
                        <h1>New record form</h1>
                        <NewPost add={Add}></NewPost>
                    </Route>
                    <Route path={'/:postId'}>
                        <h1>Details page</h1>
                        <PostOne posts={posts}></PostOne>
                    </Route>
                    <Route path='/'>
                        <h1>List page</h1>
                        <Link style={{ textDecoration: 'none' }} to={'/newPost'}><button className="newButton">New post</button></Link>
                        <table className="table">
                            <tr className="head">
                                <th className="headId">ID</th>
                                <th className="headTitle">Title</th>
                                <th className="headBody">Body</th>
                            </tr>
                        </table>
                        {posts.map((post) => (<Posts key={post.id} data={post}></Posts>))}
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;