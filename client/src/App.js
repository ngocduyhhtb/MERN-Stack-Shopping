import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import WebLayoutRoute from "./layout/WebLayout";
import Homepage from "./components/Homepage/Homepage";
import AdminLayoutRoute from "./layout/AdminLayout";
import Admin from "./components/AdminPage/Admin";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";

/**Layout**/

function App() {
    return (
        <Router>
            <Switch>
                <WebLayoutRoute exact path="/" component={Homepage}/>
                <WebLayoutRoute exact path="/shop" component={Shop}/>
                <WebLayoutRoute exact path="/product" component={Homepage}/>
                <WebLayoutRoute exact path="/login" component={Login}/>
                <AdminLayoutRoute exact path="/admin" component={Admin}/>
            </Switch>
        </Router>
    );
}

export default App;
