import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Posts } from '../../api/Index';
import Post from '../../api/Post';
import './Posts.scss';

interface ParamMatchProps {
    post: string;
}

export default class ShowPost extends React.Component<RouteComponentProps<ParamMatchProps>> {
    state = {
        post: {} as Post
    }

    componentDidMount() {
        let { post } = this.props.match.params;
        Posts.get(parseInt(post))
            .then(res => {
                console.log(res.data);
                this.setState({ post: res.data });
            });
    }

    render() {
        return (
            <article>
                <h1>{ this.state.post.title }</h1>
                <p className="boxed">{ this.state.post.content }</p>
            </article>
        );
    }
}