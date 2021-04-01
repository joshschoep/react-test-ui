import React from 'react';
import { Posts } from '../../api/Index';
import Post from '../../api/Post';
import './Posts.scss';

interface PostFormProps {
    title: string;
    method: "PUT" | "POST";
    id?: number;
    content: Post;
}

interface PostFormState {
    post: Post
}

export default class PostForm extends React.Component<PostFormProps, PostFormState> {
    constructor(props: PostFormProps) {
        super(props);
        this.state = {
            post: props.content
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    protected handleChange(
        event: React.ChangeEvent<HTMLInputElement> 
            | React.ChangeEvent<HTMLTextAreaElement>
        ): void 
    {
        const name = event.target.name;
        if(name === "title" || name === "content"){
            let newPost = {...this.state.post};
            newPost[name] = event.target.value;
            this.setState({ post: newPost });
        }
    }
    
    protected handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        if(this.props.method === "POST"){
            console.log(Posts.create(this.state.post));
        }else if(this.props.method === "PUT"){
            console.log(Posts.update(this.props.id || -1, this.state.post));
        }else{
            console.log(`Unknown request method: ${this.props.method}`);
        }
        event.preventDefault();
    }

    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <label>Title
                            <input 
                                name="title" 
                                type="text" 
                                placeholder="Enter a title here..."
                                value={this.state.post.title}
                                onChange={this.handleChange}
                            />
                        </label>
                    </section>
                    <section className="grows">
                        <label>Content
                            <textarea
                                name="content"
                                placeholder="Enter your post here!"
                                value={this.state.post.content}
                                onChange={this.handleChange}
                            />
                        </label>
                    </section>
                    <section>
                        <button type="submit">Submit changes</button>
                    </section>
                </form>
            </article>
        )
    }
}