const Resolution = require("./Resolution");

exports.parseResolution = (data) => {
    const title = data.data.title;
    const resRegex = new RegExp('[0-9]+[ Xx×]+[0-9]+');
    const resolutionMatch = title.match(resRegex);
    if (!resolutionMatch) { // Couldn't extract resolution from title
        return new Resolution(0, 0);
    } else {
        const resolutionString = resolutionMatch[0];
        const widthRegex = new RegExp('^[0-9]+')
        const heightRegex = new RegExp('[0-9]+$')
        const width = resolutionString.match(widthRegex)[0];
        const height = resolutionString.match(heightRegex)[0];
        return new Resolution(width, height);
    }
}