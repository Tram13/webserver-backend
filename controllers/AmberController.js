exports.imagesList = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/public/images/amber/";
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        amber_brugge: baseUrl + "amber_brugge.jpg"
    });
};