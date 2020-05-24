import React from "react";
import M from "materialize-css"
import Suggestion from "../../../DTO/Suggestion"
import postSuggestion from "../../../APIHelper/Suggestion/PostSuggestion";
import { Redirect } from "react-router-dom";

class SuggestionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            name: undefined,
            message: undefined
        };
        this.props.updateSelected("suggestions");
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    sendAlert = (status, actionString) => {
        if (status.ok) {
            alert(actionString + " suggestion succesful!");
        } else {
            status.json().then(json => alert(actionString + " suggestion failed!\n" + json.message));
        }
    };

    createNew = () => {
        const newSuggestion = new Suggestion(this.state.name, this.state.message, this.props.api['suggestions']);
        postSuggestion(newSuggestion).then(r => this.sendAlert(r, "Adding"))
    };

    submit = (event) => { // Zoals voorgesteld in https://reactjs.org/docs/forms.html
        event.preventDefault();
        this.createNew();
        this.setState({
            redirect: true
        })
    };

    componentDidMount() {
        const elems = document.querySelectorAll('.autocomplete');
        //TODO: de lijst van namen genereren adhv databank, met foto van api ofzo
        M.Autocomplete.init(elems, {
            data: {
                "Amber": null,
                "Arno": null,
                "Jonas": null,
                "Wout": null
            }
        });
        M.updateTextFields();
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={"/suggestions"}/>;
        } else return (
            <div className="row padded-left">
                <h3>Please enter your name and suggestion below.</h3>
                <form className="col s12" onSubmit={this.submit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input name="name" id="name" type="text" className="validate autocomplete"
                                   onChange={this.updateState}/>
                            <label htmlFor="name">Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">textsms</i>
                            <textarea name="message" id="textarea1" className="materialize-textarea"
                                      onChange={this.updateState}/>
                            <label htmlFor="textarea1">Your suggestion: </label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        )
    }
}

export default SuggestionForm

