exports.imagesList = function(req, res) {
    const index = "localhost:9000"
    const prefix = index + "/static_images/wout/"
    res.status(200).json({
        index: index,
        url : prefix,
        kop1: "wout_kop1.jpg",
        kop2: "wout_kop2.jpg",
        kop3: "wout_kop3.png"
    });
}