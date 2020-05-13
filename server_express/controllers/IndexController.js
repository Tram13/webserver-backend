exports.index = function(req, res) {
    const index = "localhost:9000"
    res.status(200).json({
        url : index,
        wout: "/wout",
        jonas: "/jonas",
        minecraft: "/minecraft"
    });
}
