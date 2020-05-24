import getRequestoptions from "../RequestOptions";

function postSuggestion(suggestion) {
    const data = {
        name: suggestion.name,
        message: suggestion.message
    };
    const requestOptions = getRequestoptions('POST', data);
    return fetch(suggestion.url, requestOptions)
}

export default postSuggestion;