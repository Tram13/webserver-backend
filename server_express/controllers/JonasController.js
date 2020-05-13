exports.imagesList = function(req, res) {
    const index = "http://localhost:9000"
    const baseUrl = index + "/static_images/jonas/"
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        kop1: baseUrl + "jonas_kop1.jpg",
        kop2: baseUrl + "jonas_kop2.jpg",
    });
}