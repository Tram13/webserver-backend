const { exec } = require("child_process");

exports.info = function(req, res) {
    const index = "http://tram13.me:9000"
    res.status(200).json({
        index: index,
        online: getOnlineStatus()
    });
}

function getOnlineStatus() {
    exec("nmap -p 25565 192.168.0.2 | grep \"open\"", (error, stdout, stderr) => {
        if (error) {
            return false;
        }
        if (stderr) {
            return false;
        }
        return stdout.length !== 0;
    });
}