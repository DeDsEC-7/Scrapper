const puppeteer = require('puppeteer');

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the website
  await page.goto('https://jiji.com.et/cars');

  // Extract the list of cars
  const carList = await page.evaluate(() => {
    const cars = [];

    // Get the car elements
    const carElements = document.querySelectorAll('.car-element');

    // Iterate over the car elements and extract data
    carElements.forEach((carElement) => {
      const name = carElement.querySelector('.car-name').textContent;
      const price = carElement.querySelector('.car-price').textContent;
      const condition = carElement.querySelector('.car-condition').textContent;

      cars.push({ name, price, condition });
    });

    return cars;
  });

  console.log(carList);

  // Close the browser
  await browser.close();
})();