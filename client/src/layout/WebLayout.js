import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const WebLayout = ({children, ...rest}) => {
    return (
        <div className="home-page">
            <Header/>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
};
const WebLayoutRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => (
                <WebLayout>
                    <Component {...props}/>
                </WebLayout>
            )}
        />
    )
}

export default WebLayoutRoute;