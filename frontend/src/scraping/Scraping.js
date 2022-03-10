const puppeteer = require("puppeteer");

const funcion = (async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://sites.google.com/view/pruebasticsapi/actividades-de-aprendizaje");

    // await page.goto("https://example.com/");

  await page.waitForSelector(".yaqOZd")

  const informacion = await page.evaluate(() => {
    
    const contenido = []

    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(element => {
        contenido.push(element.innerText)
    });
    
    return contenido;
    });

  console.log(informacion);


  await browser.close();
})();