var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
var deploySettings = require('./deploySettings');

var config = {
    user: "omiskhu", 
    host: "omisk.hu",
    password: deploySettings.PASSWORD,
    port: 21,
    localRoot: __dirname + "/build/",
    remoteRoot: "/public_html/",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["*", "**/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    //exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};

console.log('Fly me to the moon...')

ftpDeploy
    .deploy(config)
    .then(res => console.log("finished:", res))
    .catch(err => console.log(err));