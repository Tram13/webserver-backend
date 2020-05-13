exports.index = function(req, res) {
    res.status(200).json({
        url : "localhost:9000",
        wout: "/wout",
        jonas: "/jonas",
        minecraft: "/minecraft"
    });
}
