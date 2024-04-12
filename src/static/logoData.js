const fs = require('fs/promises'); // Import fs promises module for async file operations
const path = require('path');

async function readLogosDirectory() {
  const logosDirectory = path.resolve('./src/static/logo');
  try {
    // Read the contents of the logos directory
    const files = await fs.readdir(logosDirectory);

    // Create an array to store logoData
    const logoData = files.map((file) => {
      // Extract the filename without extension
      const title = file.replace('.svg', '');
      // Construct the full path to the SVG file
      const logoPath = `${logosDirectory}${file}`;
      // Return an object with title and logo properties
      return { title, logo: logoPath };
    });

    return logoData; // Return the logoData array
  } catch (err) {
    console.error('Error reading logos directory:', err);
    return []; // Return an empty array if an error occurs
  }
}

module.exports = readLogosDirectory;
