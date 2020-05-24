import getRequestoptions from "../requestOptions";

function createSuggestion(suggestion) {
    const data = {
        name: suggestion.name,
        message: suggestion.message
    };
    const requestOptions = getRequestoptions('POST', data);
    return fetch(suggestion.url, requestOptions)
}

export default createSuggestion;