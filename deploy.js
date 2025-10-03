const FtpDeploy = require('ftp-deploy');
const chalk = require('chalk');
const ora = require('ora');
const logSymbols = require('log-symbols');
const deployer = new FtpDeploy();

const config = {
    user: 'icpc2t',
    password: 'abc1231@icpc',
    host: 'icpc2t.nitrr.ac.in',
    port: 22,
    localRoot: __dirname + '/dist',
    remoteRoot: '/uploads/',
    include: ['*', '**/*'],
    exclude: ["node_modules/**", "node_modules/**/.*", ".git/**"],
    deleteRemote: true,
    forcePasv: false,
    sftp: true
}

console.log(chalk.blue('Launching deploy ship...'));
console.log(chalk.blue('========================'));

const connectSpinner = ora('Contacting server').start();
const progressSpinner = ora('Uploading');
const fileSpinner = ora();

deployer.deploy(config, function (err) {
    if (err) {
        connectSpinner.fail(chalk.red('ERROR') + ' ' + err.message);
        process.exit(1);
    } else {
        console.log(chalk.green(logSymbols.success + ' DEPLOY SUCCESS'));
        process.exit();
    }
});

deployer.on('error', function (err) {
    connectSpinner.fail(chalk.red('ERROR') + ' ' + err.message);
});

const progress = {};

deployer.on('uploading', function (data) {
    if (data.transferredFileCount < 1) connectSpinner.succeed('Start uploading process');

    progress[data.filename] = ora('[ ' + (data.transferredFileCount + 1) + '/' + data.totalFileCount + ' ] ' + data.filename).start();
});

deployer.on('uploaded', function (data) {
    progress[data.filename].succeed();
});