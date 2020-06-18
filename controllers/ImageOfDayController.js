const fetch = require("node-fetch");
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

function getTopOfRedditPost(data) {
    const top = data.data.children[0];
    return top.data.url;
}

exports.imagesList = (req, res) => {
    getTopImageFromSubreddit(res, "earthporn", ModesEnum.Json)
};

exports.earthPorn = (req, res) => {
    getTopImageFromSubreddit(res, "earthporn", ModesEnum.Image)
}