exports.index = function(req, res) {
    const index = "http://tram13.me:9000"
    res.status(200).json({
        index : index,
        baseUrl: index,
        wout: index + "/wout",
        jonas: index + "/jonas",
        minecraft: index + "/minecraft",
        home: index + "/home"
    });
}
