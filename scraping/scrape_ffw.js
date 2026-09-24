const { chromium } = require('playwright');
const cheerio = require('cheerio');
const fs = require('fs/promises');

(async () => {
  const url = 'https://agenciao3.cl/ffw';
  console.log(`Iniciando scraping de ${url}...`);
  
  // Launch browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    // Go to the website
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // Get HTML content
    const html = await page.content();
    
    // Load into Cheerio for parsing
    const $ = cheerio.load(html);
    
    // Extract metadata
    const title = $('title').text() || 'Sin título';
    
    // Clean up scripts and styles before extracting text
    $('script, style').remove();
    const textContent = $('body').text().replace(/\s+/g, ' ').trim();
    
    // Extract links
    const links = [];
    $('a').each((i, element) => {
      const text = $(element).text().trim();
      const href = $(element).attr('href');
      if (href && href.startsWith('http')) {
        links.push({ texto: text, url: href });
      } else if (href && href.startsWith('/')) {
        links.push({ texto: text, url: `https://agenciao3.cl${href}` });
      }
    });
    
    // Extract images
    const images = [];
    $('img').each((i, element) => {
      const src = $(element).attr('src');
      if (src) {
         images.push(src);
      }
    });

    const data = {
      titulo: title,
      contenido_texto: textContent,
      enlaces: links,
      imagenes: images
    };
    
    // Save to JSON file
    await fs.writeFile('informacion_agenciao3_ffw.json', JSON.stringify(data, null, 2), 'utf-8');
    console.log("Scraping finalizado. Los datos se han guardado en 'informacion_agenciao3_ffw.json'.");
    
    // Optional: Take a screenshot
    await page.screenshot({ path: 'agenciao3_ffw_screenshot.png', fullPage: true });
    console.log("Captura de pantalla guardada como 'agenciao3_ffw_screenshot.png'.");
    
  } catch (error) {
    console.error("Error durante el scraping:", error);
  } finally {
    await browser.close();
  }
})();
