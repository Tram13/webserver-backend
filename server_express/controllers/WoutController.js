exports.imagesList = function(req, res) {
    let prefix = "/static_images/wout/"
    res.status(200).json({
        url : prefix,
        kop1: "wout_kop1.jpg",
        kop2: "wout_kop2.jpg",
        kop3: "wout_kop3.png"
    });
}