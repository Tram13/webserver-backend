exports.imagesList = function(req, res) {
    const index = "http://tram13.me:9000"
    const baseUrl = index + "/static_images/home/"
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        friendship: baseUrl + "friendship.png",
    });
}