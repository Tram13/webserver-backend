import getRequestoptions from "../RequestOptions";

function deleteSuggestion(suggestionID, url) {
    const data = {
        suggestionID: suggestionID
    };
    const requestOptions = getRequestoptions('DELETE', data);
    return fetch(url, requestOptions)
}

export default deleteSuggestion;