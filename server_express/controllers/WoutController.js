exports.imagesList = function(req, res) {
    const index = "http://tram13.me:9000"
    const baseUrl = index + "/static_images/wout/"
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        kop1: baseUrl + "wout_kop1.jpg",
        kop2: baseUrl + "wout_kop2.jpg",
        kop3: baseUrl + "wout_kop3.png"
    });
}