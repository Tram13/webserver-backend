const { exec } = require("child_process");

exports.info = function(req, res) {
    const index = "http://api.tram13.me"
    exec("nmap -p 25565 192.168.0.2 | grep \"open\"", (error, stdout, stderr) => {
        if (error) {
            res.status(200).json({
                index: index,
                online: false
            });
        }
        else if (stderr) {
            res.status(200).json({
                index: index,
                online: false
            });
        } else {
            res.status(200).json({
                index: index,
                online: stdout.length !== 0
            });
        }
    });
}