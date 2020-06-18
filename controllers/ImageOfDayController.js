const fetch = require("node-fetch");

exports.imagesList = (req, res) => {
    const index = "https://api.tram13.me";
    fetch('https://www.reddit.com/r/earthporn/top.json')
        .then(response => {
            response.json().then(data => {
                const top = data.data.children[0].data.url;
                const photoUrlOfTopPost = top.data.url;
                    res.status(200).json({
                        index: index,
                        earthPorn: photoUrlOfTopPost
                    })
            })
        }).catch(e => {
        console.log(e);
        console.log("error happened");
    });
};