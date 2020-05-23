import React from "react";
import M from "materialize-css"
import RedirectToHomePage from "../RedirectToHomePage";
import Suggestion from "../../DTO/Suggestion"

class Suggestions extends React.Component {

    constructor(props) {
        super(props);
        this.props.updateSelected("suggestions");
        this.state = {redirect: false};
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    createNew = () => {
        const newSuggestion = new Suggestion(this.state.name, this.state.message);
        console.log(newSuggestion)
        // TODO: post request sturen naar backend en console.log wegdoen
    };

    submit = (event) => { // Zoals voorgesteld in https://reactjs.org/docs/forms.html
        event.preventDefault();
        alert("De databank is offline. Ge kunt altijd een brief sturen I guess.");
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
            return <RedirectToHomePage/>;
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

export default Suggestions

