// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
const cheerio = require('cheerio');

const extractLinks = $ => {
  const headings = $('.wsite-content-title').map((_, element) => {
    console.log(element);
    return $(element).text();
  }).toArray() // Convert cheerio object to array
  return headings;
}

const extractContent = $ => {
  const sections = $('.wsite-section-elements > *').map((_, element) => {
    console.log(element);
    return $(element).text();
  }).toArray() // Convert cheerio object to array
  return headings;
}
    // .map((_, a) => $(a).attr('href')) // Extract the href (url) from each link


const getPage = async ({ url }) => {
  const { data } = await axios.get(url);
	const $ = cheerio.load(data); // Initialize cheerio

  return extractLinks($);
}

export default async function handler(req, res) {
  const sheridanInfo = await getPage({ url: process.env.NEXT_PUBLIC_SHERIDAN_URL });
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json({ test: 'test', sheridanInfo: JSON.stringify(sheridanInfo)})
}
