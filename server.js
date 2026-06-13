const { exec } = require('child_process');

console.log('正在启动 InkOS Studio...');

const inkos = exec('npx @actalk/inkos studio --port 3000 --host 0.0.0.0');

inkos.stdout.on('data', (data) => {
    console.log(`[InkOS] ${data}`);
});

inkos.stderr.on('data', (data) => {
    console.error(`[错误] ${data}`);
});

inkos.on('close', (code) => {
    console.log(`InkOS 进程退出，代码: ${code}`);
});
