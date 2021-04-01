import React from 'react';

interface LoginProps {
    redirect?: string
}

interface LoginState {
    email: string,
    password: string
}

export default class Login extends React.Component<LoginProps, LoginState> {
    constructor(props: LoginProps){
        super(props)
        this.state = {
            email: "",
            password: ""
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
        if(name === "email" || name === "password"){
            let newState = {...this.state};
            newState[name] = event.target.value;
            this.setState(newState);
        }
    }
    
    protected handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log(event);
        event.preventDefault();
    }

    render() {
        return (
            <article>
                <h2>Log In</h2>
                <section>
                    <label>Email
                        <input
                            name="email"
                            type="email"
                            placeholder="johndoe@example.com"
                            value={this.state.email}
                            onChange={this.handleChange}
                        ></input>
                    </label>
                </section>
                <section>
                    <label>Password
                        <input
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        ></input>
                    </label>
                </section>
                <section>
                    <button type="submit">Login</button>
                </section>
            </article>
        )
    }
}