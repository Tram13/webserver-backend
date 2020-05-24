import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error404 from "../../Error404";
import { Redirect } from "react-router-dom";
import CreateSuggestion from "./CreateSuggestion";

class SuggestionsRouter extends React.Component {
    constructor(props) {
        super(props);
        this.props.updateSelected("suggestions");
    }

    //TODO: eigenlijk wil ik geen suggestions/all, ik wil gewoon /suggestions
    render() {
        return(<Router>
            <Switch>
                <Route exact path="/suggestions/all">
                    <h1>een overview van alle suggesties</h1>
                </Route>
                <Route exact path="/suggestions/create">
                    <CreateSuggestion api={this.props.api}/>
                </Route>
                <Route exact path="/suggestions/../delete"> {/*TODO: delete*/}
                    <h1>Delete lol</h1>
                </Route>
                <Route exact path={"/suggestions"}>
                    <Redirect to={"/suggestions/all"}/>
                </Route>
                <Route>
                    <Error404 updateSelected={this.props.updateSelected}/>
                </Route>
            </Switch>
        </Router>)
    }
}

export default SuggestionsRouter;