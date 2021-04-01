import React from 'react';
import { Link } from "react-router-dom";
import Post from "../../api/Post";
import './Posts.scss';

interface PostListProps {
    posts: Post[];
    title?: string;
}

export default function PostList({title, posts}: PostListProps) {
    return (
        <article>
            { title && <h2>{ title }</h2> }
            <ul className="posts-list">
                {
                    posts.map((post) => {
                        return (
                            <li className="post boxed" key={post.id}>
                                <Link to={ `/posts/${post.id}` }>
                                    <h2>{ post.title }</h2>
                                </Link>
                                <span className="lead">
                                    Posted by {' '}
                                    <Link to={ `/users/${post.owner_id} `}>
                                        { post.owner.name || post.owner_id || "Unknown" }
                                    </Link>
                                    {/* on { Date(post.created_at).toLocaleDateString() } */}
                                    {/* at { Date.parse(post.created_at).toLocaleTimeString() } */}
                                </span>
                                { post.updated_at && post.updated_at !== post.created_at &&
                                    <span className="updated-at-note">
                                        {/* Last updated { post.updated_at.toLocaleDateString() } */}
                                        {/* at { post.updated_at.toLocaleTimeString() } */}
                                    </span>    
                                }
                                <p>{ post.lead }</p>
                            </li>
                        )
                    })
                }
                </ul>
            </article>
    )
}