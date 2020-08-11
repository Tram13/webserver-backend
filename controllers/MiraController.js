exports.imagesList = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/public/images/mira/";
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        tekening: baseUrl + "mira_tekening.png"
    });
};