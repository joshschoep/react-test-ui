import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
import EditPost from './resources/posts/Edit';
import ShowPost from './resources/posts/Show';
import Login from './routes/Login';
import RootComponent from './routes/Root';

export interface RouteData {
    name?: string;
    path: string;
    component?: typeof React.Component;
};

export const routes: RouteData[] = [
    { path: "/posts/:post/edit", component: EditPost },
    { path: "/posts/:post", component: ShowPost },
    { path: "/login", component: Login },
    { name: "Home", path: "/", component: RootComponent },
];

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                    { routes.map((routeData) => {
                        return(
                            <Route 
                                key={routeData.path}
                                path={routeData.path} 
                                component={routeData.component}
                            ></Route>
                        )
                    })
                }
            </Switch>
        </BrowserRouter>
    );
}