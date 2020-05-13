import React from 'react';
import './style.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "./Components/NavBar/NavBar";
import LoadingAnimation from "./Components/LoadingAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Minecraft from "./Components/Content/Minecraft";
import Wout from "./Components/Content/Wout";
import Jonas from "./Components/Content/Jonas";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {api: undefined, fetching: true};
        this.url = "http://localhost:9000"
    }

    componentDidMount() {
        fetch(this.url).then(
            response => (response.json()
                    .then((r) =>
                        this.setState(
                            {
                                api: r,
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
                            <Wout api={this.state.api}/>
                        </Route>
                        <Route path="/jonas">
                            <Jonas api={this.state.api}/>
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
