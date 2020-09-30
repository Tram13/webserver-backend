exports.archivelist = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/archief/";
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        ardennen20200911: baseUrl + "ardennen20200911"
    });
};
