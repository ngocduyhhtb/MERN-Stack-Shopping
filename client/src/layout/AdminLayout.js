import React, {Component} from 'react';
import {Route} from 'react-router-dom';

const AdminLayout = ({children, ...rest}) => {
    return (
        <div>
            {children}
        </div>
    );
};
const AdminLayoutRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props => (
                <AdminLayout>
                    <Component {...props}/>
                </AdminLayout>
            )}
        />
    )
}

export default AdminLayoutRoute;