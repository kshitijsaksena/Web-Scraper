const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.google.com/finance/?hl=en';

async function scrapeData() {
  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    const table = $('.sbnBtf').find('li').toArray();

    const tableArray = []
    table.forEach((value)=>{
        const newArray = [];
        newArray.push($(value).find('.ZvmM7').text());
        newArray.push($(value).find('.YMlKec').text());  
        tableArray.push(newArray);
    });
    console.table(tableArray);
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

scrapeData();
