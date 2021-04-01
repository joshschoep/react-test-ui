import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Posts } from '../../api/Index';
import Post from '../../api/Post';
import './Posts.scss';

import PostForm from './Form';

interface ParamMatchProps { 
    post: string;
}

export default class EditPost extends React.Component<RouteComponentProps<ParamMatchProps>> {
    state = {
        id: -1,
        post: {} as Post
    }

    componentDidMount() {
        let { post } = this.props.match.params;
        Posts.get(parseInt(post))
            .then(res => {
                this.setState({ 
                    post: res.data, 
                    id: parseInt(post)
                });
            })
    }
        
    render() {
        if(this.state.id !== -1 && this.state.post){
            return (
                <PostForm 
                    method="PUT" 
                    title="Edit post" 
                    id={this.state.id}
                    content={this.state.post}
            ></PostForm>
            )
        }else{
            return <ul>loading....</ul>
        }
    }
}