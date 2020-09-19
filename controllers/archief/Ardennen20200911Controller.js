exports.fileslist = (req, res) => {
    const index = "https://api.tram13.me";
    const imageUrl = index + "/public/images/archief/ardennen20200911/";
    const baseUrl = index + "/archief/ardennen20200911/"
    res.status(200).json({
        index: index,
        baseUrl : baseUrl,
        packinglist: imageUrl + "packinglist.png",
        photos: baseUrl + "photos"
    });
};

exports.photos = (req, res) => {
    res.download('/mnt/hdd/photo/Onze\ Foto\'s/2020-09-11_Ardennen/2020-09-11_Ardennen.zip', (err) => {
        if (err) {
            console.log(res.headersSent);
        }
    });
}