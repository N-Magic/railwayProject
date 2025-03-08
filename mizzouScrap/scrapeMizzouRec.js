const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://www.connect2mycloud.com/Widgets/Data/locationCount?type=circle&key=2f852228-dca5-4073-bc3b-cf378f4d0e31";

axios
  .get(url)
  .then((response) => {
    const html = response.data; // Axios stores the response HTML in `data`
    console.log(html);
    // Load the HTML into cheerio
    const $ = cheerio.load(html);
    // Select all elements with the class 'barChart', map over them, and take the first two lines of text from each
    var barChartTexts = $(".circleChart")
      .map(function () {
        var lines = $(this).text().split("\n"); // Split the text by new lines
        return lines
          .slice(1, 3)
          .map((line) => line.trim())
          .join("\n"); // Get the first two lines and join them back
      })
      .get(); // Convert the resulting jQuery object to a regular array

    console.log(barChartTexts); // Output the array containing the first two lines from each element
  })
  .catch((error) => {
    console.error("Error fetching the page:", error.message);
  });
