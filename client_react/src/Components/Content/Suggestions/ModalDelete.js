import React from "react";
import M from "materialize-css";
import deleteSuggestion from "../../../APIHelper/Suggestion/DeleteSuggestion";

class ModalDelete extends React.Component {

    componentDidMount() {
        const elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
    }

    sendAlert = (status, actionString) => {
        if (status.ok) {
            M.toast({html: actionString + " suggestion succesful!"});
        } else {
            M.toast({html: actionString + " suggestion failed!"});
        }
        this.props.after();
    };

    deleteSuggestion = () => {
        deleteSuggestion(this.props.id, this.props.url).then(r => this.sendAlert(r, "Deleting"))
    };

    render() {
        return (
            <div id={this.props.id} className="modal">
                <div className="modal-content">
                    <h4>Are you sure you want to delete this suggestion?</h4>
                    <p>This action cannot be undone.</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-close btn-flat">Cancel</button>
                    <button className="modal-close btn red" onClick={this.deleteSuggestion}>Delete</button>
                </div>
            </div>
        )
    }
}

export default ModalDelete;