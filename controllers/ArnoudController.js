exports.imagesList = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/public/images/arnoud/";
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        arnoud_kijk: baseUrl + "arnoud_kijk.png",
    });
};