exports.imagesList = function(req, res) {
    const index = "http://api.tram13.me"
    const baseUrl = index + "/static_images/jonas/"
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        kop1: baseUrl + "jonas_kop1.png",
        kop2: baseUrl + "jonas_kop2.png",
    });
}