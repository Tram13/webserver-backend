import React from 'react';
import './style.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "./Components/NavBar/NavBar";
import LoadingAnimation from "./Components/LoadingAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Minecraft from "./Components/Content/Minecraft";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: null, fetching: true};
        this.url = "http://localhost:9000"
    }

    // TODO: kan prob naar mainWindow verhuisd worden, of van deze klasse de mainwindow maken?
    componentDidMount() {
        fetch(this.url).then(
            response => (response.json()
                    .then((r) =>
                        this.setState(
                            {
                                data: r,
                                fetching: false
                            }
                        )
                    )
            )
        )
    }

    render() {
        if (this.state.fetching) {
            return (
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route path={""}>
                            <LoadingAnimation/>
                        </Route>
                    </Switch>
                </Router>
            )
        } else {
            return (
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route path="/wout">
                            <h1>wout</h1>
                        </Route>
                        <Route path="/jonas">
                            <h1>Jonas</h1>
                        </Route>
                        <Route path="/minecraft">
                            <Minecraft/>
                        </Route>
                        <Route path={""}>
                            <h1>Home</h1>
                        </Route>
                    </Switch>
                </Router>
            )
        }
    }
}

export default App;
