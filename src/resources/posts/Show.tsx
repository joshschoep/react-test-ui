import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Posts } from '../../api/Index';
import Post from '../../api/Post';
import Loading from '../../Loading';
import './Posts.scss';

interface ParamMatchProps {
    post: string;
}

interface ShowPostState {
    post: Post;
    inSuspense: boolean
}

export default class ShowPost extends React.Component<RouteComponentProps<ParamMatchProps>, ShowPostState> {
    state = {
        post: {} as Post,
        inSuspense: true
    }

    componentDidMount() {
        let { post } = this.props.match.params;
        Posts.get(parseInt(post))
            .then(res => {
                this.setState({ post: res.data as Post, inSuspense: false });
            });
    }

    render() {
        if(this.state.inSuspense){
            return <Loading />
        }else{
            return (
                <article>
                    <h1>{ this.state.post.title }</h1>
                    <p className="boxed">{ this.state.post.content }</p>
                </article>
            );
        }
    }
}