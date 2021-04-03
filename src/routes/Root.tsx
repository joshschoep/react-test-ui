import React from 'react';
import Post from '../api/Post';
import Pagination from '../api/Pagination';
import PostList from '../resources/posts/Index';
import { Posts } from '../api/Index';
import Loading from '../Loading';

export default class RootComponent extends React.Component {
    state = {
        posts: [] as Post[],
        pagination: {} as Pagination,
        inSuspense: true
    }

    componentDidMount() {
        Posts.recent()
            .then(res => {
                this.setState({ 
                    posts: res.data.data as Post[],
                    pagination: res.data as Pagination,
                    inSuspense: false
                });
            });
    }

    render() {
        if(this.state.inSuspense){
            return <Loading />
        }else{
            return (
                <PostList 
                    title="Showing recent posts" 
                    posts={this.state.posts}></PostList>
            );
        }
    }
};