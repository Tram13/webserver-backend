import getRequestoptions from "../RequestOptions";

function postSuggestion(suggestion) {
    const data = {
        author: suggestion.author,
        message: suggestion.message
    };
    const requestOptions = getRequestoptions('POST', data);
    return fetch(suggestion.url, requestOptions)
}

export default postSuggestion;