function getRequestOptions(method, data) {
    return {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }
}

export default getRequestOptions;