import React from "react";
import LoadingAnimation from "../../LoadingAnimation";
import {Link} from "react-router-dom";

class SuggestionsList extends React.Component {
    _id;

    constructor(props) {
        super(props);
        this.state = {data: {}, fetching: true};
        this.props.updateSelected("suggestions");
    }

    componentDidMount() {
        const url = this.props.api["suggestions"];
        fetch(url).then(
            response => (response.json()
                    .then((r) => {
                            this.setState(
                                {
                                    data: r["suggestions"],
                                    fetching: false
                                }
                            )
                        }
                    )
            )
        );
    }

    dataToTableRows = () => {
        return this.state.data.map(
            (suggestion) =>
                <tr key={suggestion._id}>
                    <td className="padded-left" key={suggestion._id + suggestion.author}>{suggestion.author}</td>
                    <td key={suggestion._id + suggestion.message}>{suggestion.message}</td>
                    <td key={suggestion._id + "Update"}>
                        <Link to={"/suggestions/" + suggestion._id + "/update"}
                              className="waves-effect waves-light btn-small red lighten-2 right-align"><i
                            className="material-icons left">edit</i>Update</Link>
                    </td>
                    <td key={suggestion._id + "Delete"}>
                        <Link to={"/suggestions/" + suggestion._id + "/delete"}
                              className="waves-effect waves-light btn-small red right-align"><i
                            className="material-icons left">delete_forever</i>Delete</Link>
                    </td>
                </tr>
        )
    };

    render() {
        const floatingAddButton = <div className="fixed-action-btn">
            <Link to="suggestions/create" className="btn-floating btn-large teal">
                <i className="large material-icons">add</i>
            </Link>
        </div>;
        if (this.state.fetching) {
            return <LoadingAnimation/>
        } else {
            return (
                <div>
                    <table id={"suggestionsTable"} className={"responsive-table striped highlight"}>
                        <thead>
                        <tr>
                            <th key={"author"} className="padded-left">Author</th>
                            <th key={"message"}>Suggestion</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.dataToTableRows()}
                        </tbody>
                    </table>
                    {floatingAddButton}
                </div>
            )
        }
    }
}

export default SuggestionsList;

