exports.index = function(req, res) {
    const index = "https://api.tram13.me";
    res.status(200).json({
        index : index,
        baseUrl: index,
        wout: index + "/wout",
        jonas: index + "/jonas",
        minecraft: index + "/minecraft",
        suggestions: index + "/suggestions",
        home: index + "/home"
    });
};
