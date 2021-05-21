import React, { Component } from 'react';

class BlogMedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        let headers = {"Content-Type": "application/json"}
        fetch(process.env.REACT_APP_API_URL + "posts/", {headers: headers, method: "GET"})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        posts: result
                    });
                },
                (error) => {
                    // TODO: put error handling
                }
            )
        ;
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h2>Welcome to BlogMedia!</h2>
                <ul>
                    {posts.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BlogMedia;
