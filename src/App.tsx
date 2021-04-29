import React from 'react';
import {HashRouter, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Employees from "./components/employees/employees";
import Main from "./components/main/main";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const PATH = {
    main: '/main',
    employees: '/employees'
}

function App() {
    return <>
        <HashRouter>
            <AppBar position="static">
                <Toolbar>
                    <NavLink to={PATH.main}>Главная</NavLink>
                    <NavLink to={PATH.employees}>Сотрудники</NavLink>
                </Toolbar>
            </AppBar>

            <div>

                <div>
                    <div>
                        <Switch>
                            <Route path={PATH.employees}
                                   render={() => <Employees/>}/>
                            <Route exact path={PATH.main}
                                   render={() => <Main/>}/>
                            <Redirect from='/' to={PATH.employees}/>

                        </Switch>
                    </div>
                </div>


            </div>
        </HashRouter>
    </>;
}

export default App;
