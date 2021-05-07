exports.archivelist = (req, res) => {
    const index = "https://api.tram13.me";
    const baseUrl = index + "/archief/";
    res.status(200).json({
        index: index,
        baseUrl: baseUrl,
        ardennen20200911: baseUrl + "ardennen20200911",
        file: baseUrl + "file",
        video: baseUrl + "video"
    });
};

exports.stuurFile = (req, res) => {
    res.download('/mnt/hdd/data/torrents_and_tools/file.zip', (err) => {
        if (err) {
            console.log(res.headersSent);
        }
    });
}

exports.stuurVideoWebm = (req, res) => {
    res.download('/mnt/hdd/data/torrents_and_tools/video.webm', (err) => {
        if (err) {
            console.log(res.headersSent);
        }
    });
}

exports.stuurVideoMov = (req, res) => {
    res.download('/mnt/hdd/data/torrents_and_tools/video.mov', (err) => {
        if (err) {
            console.log(res.headersSent);
        }
    });
}
