import React from 'react';
import './style.css'
import 'materialize-css/dist/css/materialize.min.css'
import NavBar from "./Components/NavBar/NavBar";
import LoadingAnimation from "./Components/LoadingAnimation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Minecraft from "./Components/Content/Minecraft";
import Wout from "./Components/Content/Wout";
import Jonas from "./Components/Content/Jonas";
import Home from "./Components/Content/Home";
import Error404 from "./Components/Error404";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {api: undefined, fetching: true};
        this.url = "https://api.tram13.me"
    }

    updateSelected = (selected) => {
        this.setState({selected: selected});
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
                    <NavBar selected={this.state.selected}/>
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
                    <NavBar selected={this.state.selected}/>
                    <Switch>
                        <Route exact path="/wout">
                            <Wout api={this.state.api} updateSelected={this.updateSelected}/>
                        </Route>
                        <Route exact path="/jonas">
                            <Jonas api={this.state.api} updateSelected={this.updateSelected}/>
                        </Route>
                        <Route exact path="/minecraft">
                            <Minecraft api={this.state.api} updateSelected={this.updateSelected}/>
                        </Route>
                        <Route exact path={"/"}>
                            <Home api={this.state.api} updateSelected={this.updateSelected}/>
                        </Route>
                        <Route>
                            <Error404 updateSelected={this.updateSelected}/>
                        </Route>
                    </Switch>
                </Router>
            )
        }
    }
}

export default App;
