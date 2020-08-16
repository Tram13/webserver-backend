exports.imagesList = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/public/images/Error404/";
    res.status(200).json({
        index: index,
        baseUrl: baseUrl,
        icon: baseUrl + "error-404.png"
    });
};