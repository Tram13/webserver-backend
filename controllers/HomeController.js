exports.imagesList = function(req, res) {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/public/images/home/";
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        friendship: baseUrl + "friendship.png",
    });
};