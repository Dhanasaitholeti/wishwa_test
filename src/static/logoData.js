const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid'); // Import uuid library for generating unique IDs

async function readLogosDirectory() {
  const logosDirectory = path.resolve('./src/static/logo');
  try {
    // Read the contents of the logos directory
    const files = await fs.readdir(logosDirectory);

    const logoData = files.map((file) => {
      const id = uuidv4();
      const title = file.replace('.svg', '');
      const logoPath = `${logosDirectory}${file}`;
      return { id, title, logo: logoPath };
    });

    return logoData; // Return the logoData array
  } catch (err) {
    console.error('Error reading logos directory:', err);
    return []; // Return an empty array if an error occurs
  }
}

module.exports = readLogosDirectory;
