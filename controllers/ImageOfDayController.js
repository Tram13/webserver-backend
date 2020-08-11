const fetch = require("node-fetch");
const {parseResolution} = require("../parsers/ResolutionParser/ResolutionParser");
const index = "https://api.tram13.me";
const ModesEnum = {"Image":0, "Json":1}
Object.freeze(ModesEnum)

//TODO: meerdere subreddits supporten

function getTopImageFromSubreddit(res, subreddit, mode = ModesEnum.Image) {
    const fetchUrl = "https://www.reddit.com/r/" + subreddit + "/top.json";
    fetch(fetchUrl)
        .then(response => {
            response.json().then(data => {
                const imageUrl = getTopOfRedditPost(data)
                if (mode === ModesEnum.Image) {
                    res.redirect(imageUrl);
                }
                else if (mode === ModesEnum.Json) {
                    const baseUrl = index + "/imageOfDay/";
                    res.status(200).json({
                        index: index,
                        baseUrl: baseUrl,
                        earthPorn: baseUrl + "earthPorn"
                    });
                }
            }).catch(err => {
                console.log(err);
            })
        }).catch(err => {
        console.log(err);
    });
}

function hasGoodResolutionChecker(data) {
    const resolution = parseResolution(data);
    return (resolution.width > 3000 && resolution.height > 2000);
}

function getTopOfRedditPost(data) {
    let postIteratorIndex = 0;
    let hasGoodResolution = false;
    while (postIteratorIndex < data.data.children.length && !hasGoodResolution) {
        const imageJson = data.data.children[postIteratorIndex];
        hasGoodResolution = hasGoodResolutionChecker(imageJson);
        postIteratorIndex++;
    }
    const top = data.data.children[postIteratorIndex - 1]; // Minus 1 because while-loop will always add 1 after each loop, even if it has good resolution
    return top.data.url;
}

exports.imagesList = (req, res) => {
    getTopImageFromSubreddit(res, "earthporn", ModesEnum.Json)
};

exports.earthPorn = (req, res) => {
    getTopImageFromSubreddit(res, "earthporn", ModesEnum.Image)
}