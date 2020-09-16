exports.fileslist = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/archief/";
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        ardennen20200911: baseUrl + "ardennen20200911"
    });
};

exports.ardennen20200911 = (req, res) => {
    res.download('/mnt/hdd/photo/Onze\ Foto\'s/2020-09-11_Ardennen/2020-09-11_Ardennen.zip', (err) => {
        if (err) {
            console.log(res.headersSent);
        }
    });
}