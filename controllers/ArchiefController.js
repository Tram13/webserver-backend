exports.fileslist = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/public/images/archief/";
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        ardennen20200911: baseUrl + "2020-09-11_Ardennen.zip"
    });
};