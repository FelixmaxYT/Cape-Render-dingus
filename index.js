const puppeteer = require('puppeteer');
const fs = require('fs-extra');
const readlineSync = require('readline-sync');
const images = require('images');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

console.log('process started!');
(async() => {  

	console.log('doing cleanup...');
	fs.remove('output.png');
    const browser = await puppeteer.launch({headless: true,args:["--disable-web-security"]});
    const page = await browser.newPage(); 
    const url = `file://${process.cwd()}/assets/preview.html`
    await page.goto(url)
    setTimeout(async () => {
        const imageBuffer = await page.screenshot({ omitBackground: true, clip: { x: 0, y: 0, width: 1024, height: 1024 } });
        fs.writeFileSync('render.png', imageBuffer)
        await browser.close();    
    }, 100)
console.log('cape render completed!');
await sleep(1000);
images("background.png")
	.draw(images("render.png"), 0, 0) 
	.save("output.png");
console.log('render and background fused saved as output.png');
console.log('cleaning up workspace...');
fs.remove('cape.png');
fs.remove('render.png');
console.log('cleaning up finished operation completed sucessfully!');
console.log('made for Cloaks+ by Felixmax_#6450');

})();

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
    