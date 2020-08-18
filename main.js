

const puppeteer = require('puppeteer');



async function run() {
    const browser = await puppeteer.launch({
        defaultViewport: {
            height: 900,
            width: 1800
        },
        headless: false
    });

    const page = await browser.newPage();

    await page.goto('https://www.google.com.au');

    
    

    await browser.close();




}

// run();

// declare searches


let sports = ['skiing', 'biking'];
let locations = ['sydney', 'perth'];
let businessType = ['events', 'training'];

let searchQueries =  () => {
    let queries = [];
    sports.forEach(sport => {
        locations.forEach(loc => {
            businessType.forEach(type => queries.push(`${sport} ${type} in ${loc}`));
        });
    });
    return queries
};

async function initBrowser(array) {
    const browser = await puppeteer.launch();
    
    await searchQueries.forEach(query => openPage(query, browser));

}

async function openPage(queryString, browserInstance) {
    const page = await browser.newPage();
    await page.goto
}



// console.log(searchQueries());