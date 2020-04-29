const { exec } = require('child_process');

const launchDevServer = () => new Promise((resolve, reject) => {

  exec('npm start').stdout.on('data', data => {

    if (data.includes('Built in')) { resolve(); }

  }).pipe(process.stdout);

  setTimeout(() => reject(`Couldn't build the app in 2 minutes`), 1000 * 60 * 2);

});

(async () => {
  try {

    await launchDevServer();
    const testRunProcess = exec('npm run e2e');

    testRunProcess.stderr.pipe(process.stderr); // logging output from Jest goes through stderr `\(._.)/`
    testRunProcess.on('exit', process.exit);

  } catch (error) {

    console.error(error);
    process.exit(1);

  }
})();
